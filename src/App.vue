@charset "UTF-8";
<template>
  <div class="content-wrapper">
    <main class="main-content">
            <router-view />
        </main>
    
    

  </div>
</template>

<script>

export default {
    name: 'app',

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role=list],
ol[role=list] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --clr-pisa-01: #071d49;
  --clr-pisa-02: #293034;
  --clr-pisa-03: #123e9f;
  --clr-pisa-04: #971b2f;
  --clr-pisa-05: #003da5;
  --clr-pisa-06: #00843d;
  --clr-pisa-07: #843298;
  --clr-pisa-08: #fbb03b;
  --clr-neutral: #ffffff;
  --clr-dark: #000000;
  --clr-shadow: rgba(0,0,0,0.25);
  --clr-grey: rgba(186,188,190,.8);
  --clr-bdr: rgba(186,188,190,.3);
  --clr-highlight: #f0f8ff;
  --clr-chartcol: #ececec;
  --clr-showy: #ebebeb;
  --clr-usblue: #002868;
  --clr-button: #20b8be;
  --clr-url: #3366cc;
  --clr-all-sections: #4f4d52;
  --clr-stem: #cdcdcd;
  --clr-font: #4a4a4a;
  --ff-primary: Arial, sans-serif;
  font-size: 62.5%;
  font-weight: 500;
}

@page {
  size: a4 portrait;
  margin: 0.5in;
}
.content-wrapper {
  margin: 0 auto;
  width: min(95%, 102.4rem);
}

.main-content {
  color: var(--clr-font);
  font-family: var(--ff-primary);
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-top: 0.2em;
  text-align: left;
}
.main-content a {
  color: var(--clr-url);
  transition: text-decoration 0.25s ease-in-out;
}
.main-content a:hover {
  text-decoration: underline solid transparent;
}
.main-content .top-banner {
  background-color: var(--clr-pisa-01);
  border-bottom: 0.2em solid var(--clr-neutral);
  line-height: 1.1;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
}
.main-content .top-banner a {
  color: var(--clr-neutral);
  text-shadow: 0 2px 4px var(--clr-shadow);
}
.main-content .top-banner p {
  color: var(--clr-neutral);
  font-weight: 700;
  margin: 0;
  padding: 0.5em 0;
  text-align: center;
}
.main-content .top-banner.domain {
  display: flex;
  align-items: center;
  font-size: 2em;
}
.main-content .top-banner.domain.reading {
  background-color: var(--clr-pisa-05);
}
.main-content .top-banner.domain.mathematics {
  background-color: var(--clr-pisa-01);
}
.main-content .top-banner.domain.science {
  background-color: var(--clr-pisa-06);
}
.main-content .top-banner.domain p {
  font-weight: 500;
  padding: 0.5em 1em;
  text-align: left;
}
.main-content .top-banner.domain .fa-solid {
  color: var(--clr-neutral);
  margin-left: auto;
  padding-right: 1em;
}
@media print {
  .main-content .top-banner {
    display: none;
  }
}
.main-content .focal-image {
  max-width: 100%;
  height: auto;
}
@media print {
  .main-content .focal-image {
    display: none;
  }
}

.main-content .hero-subcontainer {
  background-color: var(--clr-neutral);
  margin: auto;
  padding: 0 2em;
  transform: translateY(-170px);
  max-width: 790px;
}
@media print {
  .main-content .hero-subcontainer {
    color: var(--clr-dark);
    padding: 0;
    transform: translateY(0);
    width: 100%;
  }
}
.main-content .hero-subcontainer h2 {
  font-size: 1.4em;
  font-weight: 600;
  margin-top: 2em;
  text-align: center;
}
@media print {
  .main-content .hero-subcontainer h2 {
    margin-top: 0;
    text-align: left;
  }
}
.main-content .hero-subcontainer .intro-header {
  transform: translateY(-36px);
  margin-bottom: -28px;
}
@media print {
  .main-content .hero-subcontainer .intro-header {
    transform: none;
    margin-bottom: 1em;
  }
}
.main-content .hero-subcontainer .intro-header .title-bar {
  background-color: var(--clr-pisa-01);
  display: inline-block;
  padding: 0.5em 1.5em;
}
@media print {
  .main-content .hero-subcontainer .intro-header .title-bar {
    background-color: var(--clr-neutral);
    padding: 0;
  }
}
.main-content .hero-subcontainer .intro-header .title-bar h1 {
  color: var(--clr-neutral);
  font-size: 1.9em;
  font-weight: normal;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  text-shadow: 0 2px 4px var(--clr-shadow);
}
@media print {
  .main-content .hero-subcontainer .intro-header .title-bar h1 {
    color: var(--clr-dark);
    font-weight: 700;
    text-align: left;
  }
}
.main-content .subject__area {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.main-content .subject__area__block {
  display: table;
  margin: 1em 0;
}
.main-content .subject__area__block a.sub-link {
  background-color: var(--clr-dark);
  box-shadow: 5px 10px 15px -8px var(--clr-shadow);
  color: var(--clr-neutral) !important;
  display: inline-block;
  padding: 1em 0;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
  vertical-align: middle;
  width: 190px;
}
.main-content .subject__area__block a.sub-link[data-subject=reading] {
  background-color: var(--clr-pisa-05);
}
.main-content .subject__area__block a.sub-link[data-subject=mathematics] {
  background-color: var(--clr-pisa-06);
}
.main-content .subject__area__block a.sub-link[data-subject=science] {
  background-color: var(--clr-pisa-06);
}
.main-content .subject__area__block a.sub-link[data-subject=finance] {
  background-color: var(--clr-pisa-07);
}
.main-content .subject__area__block a.sub-link:hover {
  transform: translateY(-5px);
  transition: all 0.3s ease 0s;
}
.main-content .subject__area__block a.sub-link .fa-solid {
  font-size: 4em;
}
.main-content .subject__area__block .sub-des {
  padding-left: 2em;
}
.main-content .subject__area__block .sub-label {
  display: block;
  font-weight: 700;
  padding: 1em 1.5em 0 1.5em;
  text-transform: uppercase;
}
.main-content .subject__area__block .sub-des, .main-content .subject__area__block .sub-link {
  display: table-cell;
  vertical-align: middle;
}
.main-content .story__block {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 42em) {
  .main-content .story__block {
    display: block;
  }
}
.main-content .story__block img {
  align-self: start;
}
.main-content .story__block__content {
  margin-left: auto;
  padding: 0 1em;
}

.main-content .story__block__content blockquote {
    border-left: 5px solid var(--clr-grey);
    font-weight: 700;
    margin: 1em 0;
    padding-left: 1.5em;
}

.main-content figure {
  border: 1px solid var(--clr-bdr);
  border-radius: 3px;
  margin: 1em 0;
}
.main-content figure figcaption {
  background-color: var(--clr-highlight);
  font-size: 1.1em;
  padding: 0.5em;
}
.main-content figure.chart-3.math .m3__legend,
.main-content figure.chart-3.math .r3__legend,
.main-content figure.chart-3.math .s3__legend, .main-content figure.chart-3.read .m3__legend,
.main-content figure.chart-3.read .r3__legend,
.main-content figure.chart-3.read .s3__legend, .main-content figure.chart-3.sci .m3__legend,
.main-content figure.chart-3.sci .r3__legend,
.main-content figure.chart-3.sci .s3__legend {
  margin: 0 auto;
  padding-bottom: 2em;
  height: 50px;
  width: 450px;
}
@media (max-width: 42em) {
  .main-content figure.chart-3.math .m3__legend,
  .main-content figure.chart-3.math .r3__legend,
  .main-content figure.chart-3.math .s3__legend, .main-content figure.chart-3.read .m3__legend,
  .main-content figure.chart-3.read .r3__legend,
  .main-content figure.chart-3.read .s3__legend, .main-content figure.chart-3.sci .m3__legend,
  .main-content figure.chart-3.sci .r3__legend,
  .main-content figure.chart-3.sci .s3__legend {
    height: 100%;
    width: 100%;
  }
}
.main-content figure.chart-3.math .m3__legend__title,
.main-content figure.chart-3.math .r3__legend__title,
.main-content figure.chart-3.math .s3__legend__title, .main-content figure.chart-3.read .m3__legend__title,
.main-content figure.chart-3.read .r3__legend__title,
.main-content figure.chart-3.read .s3__legend__title, .main-content figure.chart-3.sci .m3__legend__title,
.main-content figure.chart-3.sci .r3__legend__title,
.main-content figure.chart-3.sci .s3__legend__title {
  font-size: 1.4rem;
  font-weight: 600;
}
.main-content figure.chart-3.math .m3__legend__item__text,
.main-content figure.chart-3.math .r3__legend__item__text,
.main-content figure.chart-3.math .s3__legend__item__text, .main-content figure.chart-3.read .m3__legend__item__text,
.main-content figure.chart-3.read .r3__legend__item__text,
.main-content figure.chart-3.read .s3__legend__item__text, .main-content figure.chart-3.sci .m3__legend__item__text,
.main-content figure.chart-3.sci .r3__legend__item__text,
.main-content figure.chart-3.sci .s3__legend__item__text {
  font-weight: 600;
}
.main-content figure.chart-3.math .sub-contain, .main-content figure.chart-3.read .sub-contain, .main-content figure.chart-3.sci .sub-contain {
  align-items: flex-start !important;
}
.main-content figure.chart-3.math .sub-contain .grouping, .main-content figure.chart-3.read .sub-contain .grouping, .main-content figure.chart-3.sci .sub-contain .grouping {
  margin-left: 0;
}
.main-content figure.chart-5 svg button, .main-content figure.chart-5 svg .m5key {
  background-color: white !important;
}
.main-content figure.chart-6 .sub-contain {
  align-items: flex-start !important;
}
.main-content figure.chart-6 .sub-contain .grouping {
  margin-left: 0;
}
.main-content figure[class^=table-] .table-classic__container {
  padding: 0.5em 4em;
}
@media (max-width: 42em) {
  .main-content figure[class^=table-] .table-classic__container {
    padding: 0 1em 0 4em;
  }
}
@media (max-width: 24em) {
  .main-content figure[class^=table-] .table-classic__container {
    padding: 0 1em 0 2em;
  }
}
.main-content figure.table-8 table thead tr th {
  padding-top: 0.5em;
}
.main-content figure.table-8 table thead tr th[colspan] {
  background-color: var(--clr-showy);
  border-bottom: 0;
  border-radius: 0.4em 0.4em 0 0;
  padding: 0.4em 0;
  text-align: center;
}
.main-content figure.chart-3 .sub-contain {
  align-items: flex-start !important;
}
.main-content figure.chart-3 .sub-contain .grouping {
  margin-left: 0;
}
.main-content figure.chart-5 svg button, .main-content figure.chart-5 svg .m5key {
  background-color: white !important;
}
.main-content figure.chart-6 .sub-contain {
  align-items: flex-start !important;
}
.main-content figure.chart-6 .sub-contain .grouping {
  margin-left: 0;
}
.main-content figure.table-m8 table thead tr th {
  padding-top: 0.5em;
}
.main-content figure.table-m8 table thead tr th[colspan] {
  background-color: var(--clr-showy);
  border-bottom: 0;
  border-radius: 0.4em 0.4em 0 0;
  padding: 0.4em 0;
  text-align: center;
}
.main-content figure.table-m8 table thead tr:last-child th {
  text-align: right;
}
.main-content .highcharts-figure .highcharts-figure {
  min-width: 320px;
  max-width: 900px;
  margin: 1em auto;
}
.main-content .highcharts-figure #m7container,
.main-content .highcharts-figure #m9container {
  height: 400px;
}
.main-content .accordion-panel .panel {
  border-bottom: 1px solid var(--clr-bdr);
  padding: 0 1em;
  position: relative;
  width: 100%;
  overflow: hidden;
  /* :checked */
}
@media (max-width: 42em) {
  .main-content .accordion-panel .panel {
    padding: 0;
  }
}
@media print {
  .main-content .accordion-panel .panel {
    page-break-before: always;
  }
}
.main-content .accordion-panel .panel:first-child {
  border-top: 1px solid var(--clr-bdr);
}
.main-content .accordion-panel .panel:last-child {
  margin-bottom: 3em;
}
.main-content .accordion-panel .panel input.for-panel {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.main-content .accordion-panel .panel label.item-id {
  color: var(--clr-pisa-05);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  line-height: 1.4;
  padding: 1em 0 1em 3em;
  position: relative;
  text-align: left;
}
@media print {
  .main-content .accordion-panel .panel label.item-id {
    padding: 0;
  }
}
.main-content .accordion-panel .panel label.item-id:hover {
  transition: opacity 0.25s ease-in-out;
}
.main-content .accordion-panel .panel label.item-id::before {
  color: var(--clr-pisa-05);
  position: absolute;
  left: 0;
  top: 0.9em;
  display: block;
  line-height: 0.5em;
  transition: all 0.25s ease-in-out;
}
@media print {
  .main-content .accordion-panel .panel label.item-id::before {
    display: none;
  }
}
.main-content .accordion-panel .panel .panel-content {
  max-height: 0;
  padding: 0 0.5em;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  overflow: hidden;
}
@media print {
  .main-content .accordion-panel .panel .panel-content {
    border-top: none;
    max-height: 500em;
  }
}
.main-content .accordion-panel .panel .panel-content p {
  margin: 0;
}
.main-content .accordion-panel .panel .panel-content p.fine-print {
  margin: 0.5em 0 2em 0;
}
.main-content .accordion-panel .panel .panel-content p + p {
  margin-top: 1em;
}
.main-content .accordion-panel .panel .panel-content ul {
  margin: 1em 0;
  padding: 0 1em;
  list-style-type: square;
}
.main-content .accordion-panel .panel .panel-content .source-data {
  font-size: 0.8em;
  font-weight: 400;
  margin-bottom: 2em;
  padding: 0;
}
.main-content .accordion-panel .panel .panel-content .source-data li {
  list-style-type: none;
}
.main-content .accordion-panel .panel .panel-content figure:first-child {
  padding-top: 0;
}
.main-content .accordion-panel .panel input:checked ~ .panel-content {
  max-height: 500em;
  transition: max-height 1s ease-in-out;
}
@media print {
  .main-content .accordion-panel .panel input:checked ~ .panel-content {
    border-bottom: none;
  }
}
.main-content .accordion-panel .panel input[type=checkbox] + label.item-id::before {
  background: var(--clr-neutral);
  font-family: "Font Awesome 5 Free";
  font-size: 1.5em;
  content: "\f055";
}
.main-content .accordion-panel .panel input[type=checkbox]:checked + label.item-id::before {
  font-family: "Font Awesome 5 Free";
  content: "\f056";
  color: var(--clr-pisa-05);
  transform: rotate(180deg);
}
.main-content .accordion-panel .panel input + label.item-id {
  transition: all 0.3s ease-in-out;
}
.main-content .table-1 {
  line-height: 3rem;
  margin: 1em 0;
}
@media (max-width: 42em) {
  .main-content .table-1 {
    line-height: 1.5em;
  }
}
.main-content .table-1 .d-flex {
  display: flex;
}
.main-content .table-1 .flex-wrap {
  flex-wrap: wrap;
}
.main-content .table-1 .flex-column {
  flex-direction: column;
}
.main-content .table-1 .justify-center {
  justify-content: center;
}
.main-content .table-1 .table-control {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1em 0;
}
.main-content .table-1 .table-control label {
  cursor: pointer;
}
.main-content .table-1 .table-control input {
  margin-left: 0.5em;
  margin-right: 0.3em;
}
@media (max-width: 42em) {
  .main-content .table-1 .table-control.d-flex {
    display: block;
  }
}
.main-content #chart-area i.fas {
  background-color: var(--clr-showy);
  border-radius: 50%;
  border: 1px solid var(--clr-grey);
  padding: 0.1em 0.3em;
  margin: 0 0 0 -0.2em;
}
.main-content .table-1 #chart-area {
  font-size: 1.2rem;
  padding: 1em 0 0 0;
  width: 100%;
}
.main-content .table-1 #chart-area #area-left,
.main-content .table-1 #chart-area #area-right {
  flex: 50%;
  padding: 0 3em;
}
@media (max-width: 42em) {
  .main-content .table-1 #chart-area #area-left,
  .main-content .table-1 #chart-area #area-right {
    width: 100%;
  }
}
@media (max-width: 42em) {
  .main-content .table-1 #chart-area #area-right .hdr {
    display: none;
  }
}
.main-content .table-1 #chart-area .hdr {
  border-bottom: 3px solid var(--clr-dark);
  display: flex;
  align-items: end;
}
.main-content .table-1 #chart-area .hdr span {
  font-weight: 700;
  line-height: 1.4;
  text-align: left;
}
@media (max-width: 42em) {
  .main-content .table-1 #chart-area .hdr span {
    line-height: auto;
  }
}
.main-content .table-1 #chart-area .hdr span.esys {
  width: 40%;
}
@media (max-width: 42em) {
  .main-content .table-1 #chart-area .hdr span.esys {
    width: 32%;
  }
}
.main-content .table-1 #chart-area .hdr span#mn {
  width: 20%;
}
@media (max-width: 42em) {
  .main-content .table-1 #chart-area .hdr span#mn {
    width: 32%;
  }
}
.main-content .table-1 #chart-area .hdr span#diff {
  width: 38%;
}
@media (max-width: 42em) {
  .main-content .table-1 #chart-area .hdr span#diff {
    width: 32%;
  }
}
.main-content .table-1 #chart-area .hdr span .fa {
  font-size: 1.1rem;
}
.main-content .table-1 #chart-area .hdr span .fa::before {
  background-color: var(--clr-showy);
  border-radius: 0.3em;
  padding: 0.2em;
}
.main-content .table-1 #chart-area .hdr span .fa:hover {
  color: var(--clr-neutral);
}
.main-content .table-1 #chart-area .hdr span .fa:hover::before {
  background-color: var(--clr-pisa-03);
  transition: 0.2s;
}
.main-content .table-1 #chart-area .hdr span .fa.active {
  color: var(--clr-neutral);
}
.main-content .table-1 #chart-area .hdr span .fa.active::before {
  background-color: var(--clr-pisa-03);
}
.main-content .table-1 #chart-area dl {
  border-bottom: 1px solid var(--clr-grey);
}
.main-content .table-1 #chart-area dl dt {
  font-weight: 500;
  width: 42%;
}
@media (max-width: 42em) {
  .main-content .table-1 #chart-area dl dt {
    width: 32%;
  }
}
.main-content .table-1 #chart-area dl dd {
  border-left: 1px solid var(--clr-grey);
}
.main-content .table-1 #chart-area dl dd.score {
  width: 20%;
}
@media (max-width: 42em) {
  .main-content .table-1 #chart-area dl dd.score {
    width: 32%;
  }
}
.main-content .table-1 #chart-area dl dd.scorediff {
  width: 38%;
}
@media (max-width: 42em) {
  .main-content .table-1 #chart-area dl dd.scorediff {
    width: 32%;
  }
}
.main-content .table-1 #chart-area dl.not-oecd .country {
  font-style: italic;
}
.main-content .table-1 #chart-area dl .score,
.main-content .table-1 #chart-area dl .scorediff {
  display: inline-block;
  text-align: center;
}
.main-content .table-1 #chart-area dl.d-flex.d-none {
  display: none !important;
}
.main-content .table-1 #chart-area dl.usa {
  background-color: var(--clr-usblue);
  color: var(--clr-neutral);
  padding-left: 0.3em;
  position: relative;
}
.main-content .table-1 #chart-area dl.usa::before {
  content: " ";
  background: url(assets/images/us-indicator.png);
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  position: absolute;
  left: -2.5em;
}
.main-content .table-1 #chart-area dl.usa dt span, .main-content .table-1 #chart-area dl.usa dd span {
  font-weight: 700 !important;
}
.main-content .table-1 #chart-area i.fas {
  background-color: var(--clr-showy);
  border-radius: 50%;
  border: 1px solid var(--clr-grey);
  padding: 0.1em 0.3em;
  margin: 0 0 0 1em;
}
.main-content .table-1 #chart-area i.fa-diamond:before {
  font-size: 1rem !important;
  margin-left: 1em;
  padding: 0.3em;
}
.main-content .table-1 #chart-area .marker-1:before {
  content: " ¹";
}
.main-content .table-1 #chart-area .marker-2:before {
  content: " ²";
}
.main-content .table-1 #chart-area #notes {
  background-color: var(--clr-highlight);
  font-size: 1.1rem;
  line-height: 1.2em;
  margin-top: 2em;
  padding: 1em;
}
.main-content .table-1 #chart-area #notes p {
  padding-bottom: 0.5em;
}
.main-content .table-1 #chart-area #notes p + p {
  margin-top: 0;
}
.main-content .table-1 #chart-area #notes i.fas,
.main-content .table-1 #chart-area #notes i.fa-diamond:before {
  margin-left: 0;
}
.main-content .chart {
  font-family: Arial, Helvetica, sans-serif;
}
.main-content .chart .d-flex {
  display: flex;
}
@media (max-width: 42em) {
  .main-content .chart .d-flex {
    display: block;
  }
}
.main-content .chart .j-center {
  justify-content: center;
}
.main-content .chart .j-space {
  justify-content: space-between;
}
.main-content .chart .j-around {
  justify-content: space-around;
}
.main-content .chart .align-e {
  align-items: end;
}
.main-content .chart svg .axis-grid .tick line {
  stroke: var(--clr-grey);
}
.main-content .chart__controller {
  align-items: center;
  font-size: 1.2rem;
  margin: 2em 1em;
}
.main-content .chart__controller .grouping {
  margin-left: 2em;
}
.main-content .chart__controller label {
  font-weight: 600;
}
.main-content .chart__controller label:first-of-type {
  margin-right: 1em;
}
.main-content .chart__controller input {
  vertical-align: text-top;
}
.main-content .chart__controller .directive {
  font-weight: 700;
  padding-right: 0.5em;
}
.main-content .chart__controller .thead {
  display: flex;
  border-bottom: 3px solid var(--clr-dark);
  font-weight: 600;
}
.main-content .chart__controller .thead .like-th {
  display: inline-block;
  line-height: 1.3;
  padding-bottom: 0.3em;
}
.main-content .chart__controller .thead .like-th.hi-col {
  background-color: var(--clr-chartcol);
  text-align: right;
}
.main-content .chart__controller .thead .like-th .fa {
  font-size: 1.1rem;
}
.main-content .chart__controller .thead .like-th .fa::before {
  background-color: var(--clr-showy);
  border-radius: 0.3em;
  padding: 0.2em;
}
.main-content .chart__controller .thead .like-th .fa:hover {
  color: var(--clr-neutral);
}
.main-content .chart__controller .thead .like-th .fa:hover::before {
  background-color: var(--clr-pisa-03);
  transition: 0.2s;
}
.main-content .chart__controller .thead .like-th .fa.active {
  color: var(--clr-neutral);
}
.main-content .chart__controller .thead .like-th .fa.active::before {
  background-color: var(--clr-pisa-03);
}
.main-content .chart__controller .thead .like-th .active .fa {
  color: var(--clr-neutral);
}
.main-content .chart__controller .thead .like-th .active .fa::before {
  background-color: var(--clr-pisa-03);
}
.main-content .chart__controller .axis-title {
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
}
.main-content .chart__controller .button-sort {
  border: 1px solid var(--clr-grey);
  border-radius: 0.3em;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5em 2em 0.5em 1em;
  position: relative;
  margin: 0 0 0 0.5em;
}
@media (max-width: 42em) {
  .main-content .chart__controller .button-sort {
    display: block;
    margin: 0 0 0.5em 0;
  }
}
.main-content .chart__controller .button-sort.opt-2 {
  background-color: var(--clr-pisa-06);
  border: 1px solid var(--clr-pisa-06);
  color: var(--clr-neutral);
}
.main-content .chart__controller .button-sort.opt-3 {
  background-color: var(--clr-pisa-08);
  border: 1px solid var(--clr-pisa-08);
}
/* .main-content .chart__controller .button-sort.active {
  border: 2px solid var(--clr-dark);
} */
.main-content .chart__controller .button-sort:hover {
  opacity: 0.7;
  transition: 0.2s;
}
.main-content .chart__controller .button-sort.opt-2 .arrow::before,
.main-content .chart__controller .button-sort.opt-2 .arrow::after {
  background: var(--clr-neutral);
}
.main-content .chart__controller .button-sort .arrow-up,
.main-content .chart__controller .button-sort .arrow-down {
  position: absolute;
  top: 50%;
  right: 1em;
}
.main-content .chart__controller .button-sort .arrow-up::before, .main-content .chart__controller .button-sort .arrow-up::after,
.main-content .chart__controller .button-sort .arrow-down::before,
.main-content .chart__controller .button-sort .arrow-down::after {
  position: relative;
  content: "";
  display: block;
  width: 0.7rem;
  height: 0.1rem;
  background: var(--clr-dark);
  transition: 0.3s ease-in-out;
}
.main-content .chart__controller .button-sort .arrow-up::after,
.main-content .chart__controller .button-sort .arrow-down::after {
  left: 0.5rem;
  top: -0.1rem;
}
.main-content .chart__controller .button-sort .arrow-up::before {
  transform: rotate(-45deg);
}
.main-content .chart__controller .button-sort .arrow-up::after {
  transform: rotate(45deg);
}
.main-content .chart__controller .button-sort .arrow-down::before {
  transform: rotate(45deg);
}
.main-content .chart__controller .button-sort .arrow-down::after {
  transform: rotate(-45deg);
}
.main-content .chart__controller .fa-solid {
  margin: 0 0.5em;
}
.main-content .chart__graphic {
  display: flex;
  justify-content: center;
}
.main-content .chart__graphic :first-child {
  margin-right: 1em;
}
@media (max-width: 42em) {
  .main-content .chart__graphic {
    display: block;
  }
  .main-content .chart__graphic :first-child {
    margin-right: 0;
  }
}
.main-content .chart svg .button {
  cursor: pointer;
  fill: var(--clr-url);
  text-decoration: underline;
}
.main-content .chart svg .button:hover {
  opacity: 0.7;
}
.main-content .chart .notes {
  background-color: var(--clr-highlight);
  font-size: 1.1rem;
  line-height: 1.2em;
  margin-top: 2em;
  padding: 1em;
}
.main-content .chart .notes p {
  padding-bottom: 0.5em;
}
.main-content .chart .notes p + p {
  margin-top: 0 !important;
}
.main-content .chart .notes i.fas,
.main-content .chart .notes i.fa-diamond:before {
  margin-left: 0;
}
.main-content .chart .notes .marker-1:before {
  content: " ¹";
}
.main-content .chart .notes .marker-2:before {
  content: " ²";
}
.main-content .chart .lolli__legend {
  font-size: 1.2rem;
  margin-top: 2em;
}
.main-content .chart .lolli__legend__row {
  list-style-type: none !important;
  text-align: center;
}
.main-content .chart .lolli__legend__row__item {
  display: inline-block;
  line-height: 1.3;
  margin-left: 2.5em;
  text-indent: -2.5em;
  text-align: left;
  vertical-align: text-top;
}
.main-content .chart .lolli__legend__row__item:first-child {
  margin-right: 1em;
}
.main-content .chart .lolli__legend__row__item::before {
  content: "";
  display: inline-block;
  margin-right: 0.5em;
  vertical-align: top;
}
.main-content .chart .lolli__legend__row__item.circle::before {
  background-color: var(--clr-pisa-06);
  border-radius: 50%;
  height: 1em;
  width: 1em;
}
.main-content .chart .lolli__legend__row__item.rect::before {
  background-color: var(--clr-stem);
  height: 1em;
  width: 2em;
}
.main-content .table-classic__container {
  padding: 0.5em;
}
.main-content .table-classic .marker-1:before {
  content: " ¹";
}
.main-content .table-classic .marker-2:before {
  content: " ²";
}
.main-content .table-classic .justify-center {
  justify-content: center;
}
.main-content .table-classic .d-flex {
  display: flex;
}
.main-content .table-classic .table-control {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1em 0;
}
.main-content .table-classic .table-control label {
  cursor: pointer;
}
.main-content .table-classic .table-control input {
  margin-left: 0.5em;
  margin-right: 0.3em;
}
@media (max-width: 42em) {
  .main-content .table-classic .table-control.d-flex {
    display: block;
  }
}
.main-content .table-classic table {
  border-collapse: collapse;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 2em auto;
  width: max(50%, min(900px, 100%));
}
.main-content .table-classic table th, .main-content .table-classic table td {
  padding: 0.3em 0.6em;
}
.main-content .table-classic table th:first-child {
  padding-left: 0;
}
.main-content .table-classic table th:last-child {
  padding-right: 0;
}
.main-content .table-classic table thead tr th {
  border-bottom: 3px solid var(--clr-dark);
  line-height: 1.2;
  text-align: right;
  vertical-align: bottom;
}
.main-content .table-classic table thead tr th span {
  display: inline-block;
}
.main-content .table-classic table thead tr th:first-child {
  text-align: left;
}
.main-content .table-classic table thead tr th .fa {
  font-size: 1.1rem;
}
.main-content .table-classic table thead tr th .fa::before {
  background-color: var(--clr-showy);
  border-radius: 0.3em;
  padding: 0.2em;
}
.main-content .table-classic table thead tr th .fa:hover {
  color: var(--clr-neutral);
}
.main-content .table-classic table thead tr th .fa:hover::before {
  background-color: var(--clr-pisa-03);
  transition: 0.2s;
}
.main-content .table-classic table thead tr th .fa.active {
  color: var(--clr-neutral);
}
.main-content .table-classic table thead tr th .fa.active::before {
  background-color: var(--clr-pisa-03);
}
.main-content .table-classic table tbody tr th, .main-content .table-classic table tbody tr td {
  border-bottom: 1px solid var(--clr-grey);
}
.main-content .table-classic table tbody tr th {
  font-weight: 500;
  text-align: left;
}
.main-content .table-classic table tbody tr td {
  border-left: 1px solid var(--clr-grey);
  text-align: right;
}
.main-content .table-classic table tbody tr td:first-child {
  border-left: none;
  text-align: left;
}
.main-content .table-classic table tbody tr:last-child th, .main-content .table-classic table tbody tr:last-child td {
  border-bottom: 1px solid var(--clr-dark);
}
.main-content .table-classic table tbody tr.usa {
  background-color: var(--clr-usblue);
  color: var(--clr-neutral);
  position: relative;
}
.main-content .table-classic table tbody tr.usa th span::before {
  content: "";
  background: url(assets/images/us-indicator.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  position: absolute;
  left: -2.5em;
  top: 0;
}
.main-content .table-classic table tbody tr.usa th, .main-content .table-classic table tbody tr.usa td {
  font-weight: 700 !important;
}
.main-content .table-classic table.tbl2 thead th {
  width: 15%;
}
.main-content .table-classic table.tbl2 thead th:first-child {
  width: 25%;
}
.main-content .table-classic table.tbl3 thead th {
  width: 18.75%;
}
.main-content .table-classic table.tbl3 thead th:first-child {
  width: 25%;
}
.main-content .table-classic table.tblm5 {
  width: 100%;
}
.main-content .table-classic i.fas {
  background-color: var(--clr-showy);
  border-radius: 50%;
  border: 1px solid var(--clr-grey);
  padding: 0.1em 0.3em;
  margin: 0 0 0 1em;
}
.main-content .table-classic i.fa-diamond:before {
  font-size: 1rem !important;
  margin-left: 1em;
  padding: 0.3em;
}
.main-content .table-classic .marker-1:before {
  content: " ¹";
}
.main-content .table-classic .marker-2:before {
  content: " ²";
}
.main-content .table-classic .not-oecd .country {
  font-style: italic;
}
.main-content .table-classic .notes {
  background-color: var(--clr-highlight);
  font-size: 1.1rem;
  line-height: 1.2em;
  margin-top: 2em;
  padding: 1em;
}
.main-content .table-classic .notes p {
  padding-bottom: 0.5em;
}
.main-content .table-classic .notes p + p {
  margin-top: 0 !important;
}
.main-content .table-classic .notes i.fas,
.main-content .table-classic .notes i.fa-diamond:before {
  margin-left: 0;
}
.main-content .display-as {
  display: inline-block;
  margin: 2em 0 !important;
}
.main-content .display-as span {
  color: var(--clr-all-sections);
  cursor: pointer;
  padding: 0.4em 0.8em;
  text-decoration: underline;
  text-transform: uppercase;
  vertical-align: middle;
}
.main-content .display-as span.active {
  background-color: var(--clr-all-sections);
  border-radius: 0.2em;
  color: var(--clr-neutral);
  cursor: default;
  text-decoration: none;
}
.main-content .display-as span .fa-solid {
  padding-right: 0.3em;
}


.graph-view-button.active,
.table-view-button.active {
    border: 2px solid var(--clr-dark);
}

.main-content span i.fa:before {
  background-color: var(--clr-showy);
  border-radius: 0.3em;
  padding: 0.2em;
}
.main-content span i.fa.active::before {
  background-color: var(--clr-pisa-03);
}
.main-content span i.fa.active {
  color: var(--clr-neutral)
}
.main-content span i.fa {
  font-size: 1.1rem;
}



.main-content .story__block h2 {
    color: var(--clr-pisa-05);
    font-size: 1.2em;
    margin: 1em 0;
}

.main-content .tooltip-container {
  background-color: #f3f3f3;
  border-radius: 0.3em;
  color: var(--clr-pisa-05);
  cursor: pointer;
  padding: 0 0.3em;
  position: relative;
  display: inline-block;
}
.main-content .tooltip-container:hover .tooltip-text {
  opacity: 1;
  visibility: visible;
  transition: opacity 500ms linear, visibility 0s linear 500ms;
}
.main-content .tooltip-container .tooltip-text {
  background-color: var(--clr-neutral);
  border: 1px solid var(--clr-grey);
  border-radius: 0.5em;
  box-shadow: 0 10px 6px -6px var(--clr-grey);
  color: var(--clr-font);
  font-size: 0.8em;
  line-height: 1.5;
  opacity: 0;
  padding: 1em;
  position: absolute;
  visibility: hidden;
  width: 30em;
  z-index: 1;
  transition: opacity 500ms linear, visibility 0s linear 500ms;
}
.main-content .tooltip-container .tooltip-text strong {
  font-weight: 700;
}
.main-content .tooltip-container .bottom {
  top: 2em;
  left: 0;
}



</style>
