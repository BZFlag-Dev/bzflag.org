<?php

declare(strict_types=1);

/**
 * Copyright 2024 BZFlag & Associates
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Bucket from which to pull assets
$bucket_name = 'w5Uq3fvhmgEU4v3wc3P5GZcncgK75TnC';

// Store a handy prefix for our bucket files
$prefix = "https://f002.backblazeb2.com/file/{$bucket_name}";

// Try to download and parse the files.json file from the bucket
try {
  $json = @file_get_contents("$prefix/files.json");
  if ($json === false) {
    fwrite(STDERR, "Failed to fetch files.json\n");
    exit(2);
  }
  $files = json_decode($json, true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
  fwrite(STDERR, "Failed to parse files.json: {$e->getMessage()}}\n");
  exit(2);
}

// Keep running totals
$download_failure = 0;
$download_success = 0;
$download_total_size = 0;

// Loop through each file to check if we need to download them
foreach ($files as $file => $info) {
  $local_path = __DIR__.'/assets/'.$file;

  // Download the file if it does not exist, is the wrong file size, or does not match the hash
  if (!file_exists($local_path) || filesize($local_path) != $info['size'] || hash_file('sha256', $local_path) !== $info['sha256']) {
    // Create directories if needed
    if (!is_dir(dirname($local_path))) {
      mkdir(dirname($local_path), 0755, true);
    }

    echo "Downloading $file ... ";
    $src = fopen("$prefix/$file", 'r');
    $dest = fopen($local_path, 'w');
    $bytes_downloaded = stream_copy_to_stream($src, $dest);
    fclose($src);
    fclose($dest);

    // Add to the running total
    $download_total_size += $bytes_downloaded;

    // Check the size and the hash
    if ($bytes_downloaded === false) {
      echo "FAILED (Download error)\n";
      $download_failure++;
    } elseif ($bytes_downloaded != $info['size']) {
      echo "FAILED (Size mismatch)\n";
      $download_failure++;
    } elseif (hash_file('sha256', $local_path) !== $info['sha256']) {
      echo "FAILED (Hash mismatch)\n";
      $download_failure++;
    } else {
      echo "SUCCESS\n";
      $download_success++;
    }
  }
}

function bytes_to_human_readable(int $bytes): string
{
  $kilobyte = 1024;
  $megabyte = $kilobyte * 1024;
  $gigabyte = $megabyte * 1024;
  $terabyte = $gigabyte * 1024;

  if ($bytes < $kilobyte) {
    return "$bytes B";
  } elseif ($bytes < $megabyte) {
    return round($bytes / $kilobyte, 1) . ' KiB';
  } elseif ($bytes < $gigabyte) {
    return round($bytes / $megabyte, 1) . ' MiB';
  } elseif ($bytes < $terabyte) {
    return round($bytes / $gigabyte, 1) . ' GiB';
  } else {
    return round($bytes / $terabyte, 1) . ' TiB';
  }
}

if ($download_success + $download_failure > 0) {
  echo "\n============ Summary ============\n";
  echo "Total Downloaded: " . bytes_to_human_readable($download_total_size) . "\n";
  echo "Successful Downloads: $download_success\n";
}

if ($download_failure > 0) {
  fwrite(STDERR, "Failed Downloads: $download_failure\n");
  exit(2);
}
