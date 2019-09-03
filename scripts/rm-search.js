#!/usr/bin/env node
'use strict';
const fs = require('fs');
const app = fs.readFileSync('./src/test-cases-app/component-index.js', 'utf-8');
const removeSearch = app.replace(/{ title: 'Search'.*/, '');
fs.writeFileSync('./src/test-cases-app/component-index.js', removeSearch);
