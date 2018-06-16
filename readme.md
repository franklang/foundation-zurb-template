# Foundation's ZURB stack including Twig (Twig.js) template engine and Vue.js progressive JS framework

This is a fork of the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). People from ZURB use the intitial template to deliver static code to their clients. This fork has a Gulp-powered build system with these features:

- Defined coding styles with .editorconfig
- ~~Handlebars HTML templates with Panini~~ replaced with:
  - Twig (Twig.js) template engine
  - Vue.js progressive JS framework
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/franklang/foundation-zurb-template
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
```

## Usage

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.

## Further documentation

- Official [EditorConfig](https://editorconfig.org/) documentation. EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.
- Official [Foundation 6 for sites](https://foundation.zurb.com/sites/docs/) documentation and the [Starter projects > Zurb template](https://foundation.zurb.com/sites/docs/starter-projects.html#zurb-template) section.
  - In-depth description of the Zurb template: [Front-end Development Kickstarter: All about the ZURB Template](https://zendev.com/2017/09/05/front-end-development-kickstarter-zurb-template.html) by Kevin Ball from ZURB.
- Official [Twig](https://twig.symfony.com/doc/2.x/) documentation.
  - [JS implementation of the Twig Templating Language](https://github.com/twigjs/twig.js/) on GitHub. [See Twig.js implementation details wiki page for a **list of supported filters/functions/tags/tests**](https://github.com/twigjs/twig.js/wiki/Implementation-Notes).
  - [gulp-twig](https://www.npmjs.com/package/gulp-twig) package on npmjs.com
  - [Frontend Templating with Gulp and Twig.js](http://analyticl.com/blog/frontend-templating-with-gulp-and-twig-js) on analyticl.com's blog.
- Official [Vue.js](https://vuejs.org/) documentation.
  - [Adding Vue.js to Foundation's ZURB Stack](https://zendev.com/2018/04/18/adding-vue-files-to-foundation-template.html) by Kevin Ball.

## TODO's list

- Try [Twig namespaced paths](https://symfony.com/doc/current/templating/namespaced_paths.html) functionnality.
- Add [custom data support](https://www.npmjs.com/package/gulp-data) for Twig.js templates (replacing ZURB starter's initial [Panini custom data functionality](https://foundation.zurb.com/sites/docs/panini.html#custom-data)).
- Add support for SVG icons.
