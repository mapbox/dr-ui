import { readFileSync } from 'fs';

// extract tokens from page-shell (this is a little fragile)
// read contents of the page-shell-script
const pageShell = readFileSync('static/js/page-shell-script.js', 'utf-8');

const tokens = pageShell
  .match(/("([^"]|"")*")/g) // extract all values between double quotes ("")
  .filter((f) => f.includes('pk.ey')) // filter for values that contain "pk.key",
  .map((f) => f.replace(/"/g, '')); //  remove extra quotes
// first item is the production token
const productionToken = tokens[0];

export { productionToken };
