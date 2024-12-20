/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#5178cf" weight=100 icon="\uf61f" block="Area"
//% groups=["Basic", "Advanced", "Polygons"]
namespace areas {
    //% block="circle - radius $radius"
    //% group="Basic"
    export function circle(radius: number) {
        return Math.PI * Math.pow(radius, 2);
    }

    //% block="rectangle - width $width height $height"
    //% group="Basic"
    export function rect(width: number, height: number) {
        return width * height
    }

    //% block="triangle - width $width height $height"
    //% group="Basic"
    export function triangle(width: number, height: number) {
        return width * height / 2;
    }

    //% block="trapezoid - width1 $width1 width2 $width2 height $height"
    //% group="Advanced"
    export function trapezoid(width1: number, width2: number, height: number) {
        return (width1 + width2) * height / 2;
    }

    //% block="parallelogram - width $width height $height"
    //% group="Advanced"
    export function parallelogram(width: number, height: number) {
        return width * height;
    }

    //% block="ellipse - axis1 $a axis2 $b"
    //% group="Advanced"
    export function ellipse(a: number, b: number) {
        return Math.PI * a * b;
    }

    //% block="rhombus - diameter1 $p diameter2 $q"
    //% group="Advanced"
    export function rhombus(p: number, q: number) {
        return (p * q) / 2;
    }

    //% block="pentagon - side $side"
    //% group="Polygons"
    export function pentagon(side: number) {
        const s5 = Math.sqrt(5);
        return 1 / 4 * Math.sqrt(5 * (5 + (2 * s5))) * Math.pow(side, 2);
    }

    //% block="hexagon - side $side"
    //% group="Polygons"
    export function hexagon(side: number) {
        return ((3 * Math.sqrt(3)) / 2) * Math.pow(side, 2);
    }

    //% block="octagon - side $side"
    //% group="Polygons"
    export function octagon(side: number) {
        return 2 * (1 + Math.sqrt(2)) * Math.pow(side, 2);
    }
}
