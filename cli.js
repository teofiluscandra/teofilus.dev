#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const postsFolder = path.resolve(__dirname, './posts');
const today = new Date().toISOString().split('T')[0];
const slugify = require('./utils/slugify')

const attributes = process.argv.slice(2).reduce(function(list, fileName) {
    const [name, value] = fileName.split('=');

    return { ...list, [name]: { name, value } };
}, {});

const rules = {
    title:
        'Title is required',
    keywords:
        'Keyword is required',
    preview:
        'Preview is required',
};

Object.keys(rules).forEach(function(key) {
    if (!attributes[key]) {
        console.error(rules[key]);
        process.exit();
    }
    if(attributes[key].value.includes(':')){
        console.error("Value cannot contains ':'");
        process.exit();
    }
});

const file = `${postsFolder}/${today}-${slugify(attributes['title'].value)}.md`;

if (fs.existsSync(file)) {
    console.error(
        'This title is already exist',
    );
    return;
}

const postContent = `---
${Object.values(attributes)
    .map(function(attr) {
        if (attr.name === 'keywords') {
            return `${attr.name}: [${attr.value}]\n`;
        }

        return `${attr.name}: ${attr.value}\n`;
    })
    .join('')}
author: Teofilus Candra
slug: ${today}-${slugify(attributes['title'].value)}
created_at: ${today}
status: draft
---

`;

fs.writeFile(file, postContent, function(err) {
    if (err) {
        console.error('Something happened when creating the post:');
        console.error(err);
        return;
    }

    console.log('Ready to write!');
    return;
});