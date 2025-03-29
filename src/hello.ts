import { VexFlow, StaveNote } from "vexflow";

console.log(VexFlow.BUILD.VERSION); // Outputs the library's version number, e.g.: '5.0.0'

console.log(VexFlow.StaveNote); // Outputs: [class StaveNote extends StemmableNote] { DEBUG: false }

console.log(VexFlow.StaveNote === StaveNote); // Outputs: true

// console.log(VexFlow); // Outputs the VexFlow object...