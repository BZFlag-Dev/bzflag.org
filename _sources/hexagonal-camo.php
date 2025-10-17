<?php declare(strict_types=1);

/*
Copyright 2018 BZFlag & Associates

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// This file is used to generate assets/images/hexagonal-camo.png
// It outputs SVG so it can be accessed via a web browser to view the result,
// or redirected to a file from the command line.
// The process that was used to generate the PNG version is as follows:
// - Run: php hexagonal-camo.php > hexagonal-camo.svg
// - Open hexagonal-camo.svg in Inkscape and set the background color (since the
//     way it's being set isn't taking effect outside of browsers)
// - Export the page as a PNG
// - Open the PNG in GIMP
// - Go to the Image menu and then to Mode, choose Indexed, choose "Generate
//     optimum palette", 256 colors, no dithering, and click OK.
// - Save the final PNG

// https://mathopenref.com/coordpolycalc.html
// https://www.redblobgames.com/grids/hexagons/

// Inspiration: Hexatal Camo Concept -Seamless -PSD by black-light-studio
// https://www.deviantart.com/black-light-studio/art/Hexatal-Camo-Consept-Seamless-PSD-429483689

function getRegularPolygonVertices($cx, $cy, $sides, $radius, $rot = 0)
{
    $centerAng = 2 * M_PI / $sides;

    if ($sides % 2 == 0)
        $startAng = M_PI / 2 - ($centerAng/2);
    else
        $startAng = M_PI / 2;

    $startAng += deg2rad($rot);

    $vertices = [];

    for($i = 0; $i < 6; $i++)
    {
        $ang = $startAng + ($i * $centerAng);
        $vertices[] = [
            ffff($cx + $radius*cos($ang)),
            ffff($cy - $radius*sin($ang))
        ];
    }

    return $vertices;
}

// Trim unnecessary zeros from a floating point number
function ffff($float)
{
    return rtrim(rtrim(sprintf('%.3f', $float), '0'), '.');
}

function formatVertices($vertices) {
    $out = [];

    foreach($vertices as $v)
        $out[] = implode(',', $v);

    return implode(' ', $out);
}

function isBetween($value, $min, $max)
{
    return $value >= $min && $value <= $max;
}

function drawHexagon($cx, $cy, $radius, $color, $viewWidth, $viewHeight)
{
    $vertices[] = getRegularPolygonVertices($cx, $cy, 6, $radius, 90);

    // This applies to hexagons rotated 90 degrees (so the point is up and down)
    $sizeX = sqrt(3) * $radius;
    $sizeY = 2 * $radius * 0.75;
    $radX = $sizeX / 2;
    $radY = $sizeY / 2;

    // If it's completely out of view, just skip the one completely
    if (!isBetween($cx, -$radX, $viewWidth + $radX) || !isBetween($cy, -$radY, $viewHeight + $radY))
        return "";

    // If it is hanging off the left side, wrap to the right
    if ($hangingLeft = isBetween($cx, -$radX, $radX))
        $vertices[] = getRegularPolygonVertices($cx + $viewWidth, $cy, 6, $radius, 90);

    // If it is hanging off the right side, wrap to the left
    if ($hangingRight = isBetween($cx - $viewWidth, -$radX, $radX))
        $vertices[] = getRegularPolygonVertices($cx - $viewWidth, $cy, 6, $radius, 90);

    // If it is hanging off the top side, wrap to the bottom
    if ($hangingTop = isBetween($cy, -$radY, $radY))
        $vertices[] = getRegularPolygonVertices($cx, $cy + $viewHeight, 6, $radius, 90);

    // If it is hanging off the bottom side, wrap to the top
    if ($hangingBottom = isBetween($cy - $viewHeight, -$radY, $radY))
        $vertices[] = getRegularPolygonVertices($cx, $cy - $viewHeight, 6, $radius, 90);

    // Also handle hanging off of corners
    if ($hangingLeft && $hangingTop)
        $vertices[] = getRegularPolygonVertices($cx + $viewWidth, $cy + $viewHeight, 6, $radius, 90);

    if ($hangingLeft && $hangingBottom)
        $vertices[] = getRegularPolygonVertices($cx + $viewWidth, $cy - $viewHeight, 6, $radius, 90);

    if ($hangingRight && $hangingTop)
        $vertices[] = getRegularPolygonVertices($cx - $viewWidth, $cy + $viewHeight, 6, $radius, 90);

    if ($hangingRight && $hangingBottom)
        $vertices[] = getRegularPolygonVertices($cx - $viewWidth, $cy - $viewHeight, 6, $radius, 90);

    $output = "";
    foreach($vertices as $hexagon)
    {
        $formattedVertices = formatVertices($hexagon);
        $output .= "<polygon ";
        if ($color)
            $output .= "fill=\"{$color}\" ";
        $output .= "points=\"{$formattedVertices}\" />\n";
    }

    return $output;
}

function drawHexagonGrid($radius, $padding, $color, $viewWidth, $viewHeight, $coverage = 100, $offsetX = 0, $offsetY = 0)
{
    $output = "";

    $sizeX = sqrt(3) * $radius;
    $sizeY = 2 * $radius * 0.75;
    $qtyX = round($viewWidth / $sizeX);
    $qtyY = round($viewHeight / $sizeY);

    for($y = 0; $y < $qtyY; $y++)
    {
        for($x = 0; $x < $qtyX + (($y % 2 == 0)?0:1); $x++)
        {
            if (is_callable($coverage))
                $doIt = $coverage($x, $y);
            else
                $doIt = mt_rand() % 100 < $coverage;

            if ($doIt)
            {
                $output .= drawHexagon(
                    $sizeX * $x + (($y % 2 == 0)?($sizeX / 2):0) + $offsetX,
                    $sizeY * $y + $offsetY,
                    $radius - $padding,
                    is_callable($color)?$color():false,
                    $viewWidth,
                    $viewHeight
                );
            }
        }
    }

    // If the color is the same for everything, we'll define the fill color in a group
    if (!is_callable($color))
        $output = "<g fill=\"{$color}\">\n{$output}</g>\n";

    return $output;
}

$qtyX = 32;
$qtyY = 32;
$width = 800;

$sizeX = $width / $qtyX;
$radius = $sizeX / sqrt(3);
$sizeY = 2 * $radius * 0.75;
$padding = 1;
$height = round($qtyY * $sizeY);

$bgColor = '#292C3B';
$layerColors = [
    '#2A2D3C', # Bottom layer tiny hexagons
    '#2F3241', # Large hexagons
    '#303646', # Medium sized hexagons
    '#2E3142', # Overlaid tiny hexagons
];

// Initial hardcoded seed
mt_srand(2952944962824243979+10);

// Set up some seeds so that different layers can repeat the same randomization
$seeds = [];
for ($i = 0; $i < 20; $i++)
    $seeds[] = mt_rand();

header('Content-Type: image/svg+xml');

$tinySeed = 7;
$tinyDarkCoverage = 75;

?><svg style="background-color: <?=$bgColor?>" xmlns="http://www.w3.org/2000/svg" version="1.1" width="<?=$width?>" height="<?=$height?>" viewBox="0 0 <?=$width?> <?=$height?>" xmlns:xlink="http://www.w3.org/1999/xlink">
    <?php mt_srand($seeds[$tinySeed]); ?>
    <?=drawHexagonGrid($radius, $padding, $layerColors[0], $width, $height, $tinyDarkCoverage)?>
    <?php mt_srand($seeds[1]); ?>
    <?=drawHexagonGrid($radius*4, $padding*4, $layerColors[1], $width, $height, 14, $radius * 2 * sqrt(3), 18)?>
    <?php mt_srand($seeds[3]); ?>
    <?=drawHexagonGrid($radius*2, $padding*2, $layerColors[2], $width, $height, 20, 0, 12)?>
    <?php mt_srand($seeds[$tinySeed]); ?>
    <?=drawHexagonGrid($radius, $padding, $layerColors[3], $width, $height, function()use($tinyDarkCoverage){return mt_rand() % 100 >= $tinyDarkCoverage;})?>
</svg>
