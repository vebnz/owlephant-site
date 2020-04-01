import React from "react";

const LightPage = props => {
  props.setHeaderDark(true);
  return (
    <section ref={props.innerRef} className="gradient-bg fullscreen-div">
      <div class="container mt-5" id="typography">
        <section class="row">
          <article id="headings">
            <h1>This is heading h1</h1>

            <h2>This is heading h2</h2>

            <h3>This is heading h3</h3>

            <h4>This is heading h4</h4>

            <h5>This is heading h5</h5>

            <h6>This is heading h6</h6>
            <hr />

            <h1 id="display-styles" class="text-center">
              Display Styles
            </h1>
            <p class="display-1">This is display-1</p>
            <p class="display-2">This is display-2</p>
            <p class="display-3">This is display-3</p>
            <p class="display-4">This is display-4</p>
          </article>
        </section>
        <hr />
        <article>
          <h1 id="heading-classes" class="text-center">
            Heading Classes
          </h1>
          <p>
            .h1 through .h6 classes are also available, for when you want to
            match the font styling of a heading but cannot use the associated
            HTML element.
          </p>
          <p class="h1">h1. Bootstrap heading class .h1</p>
          <p class="h2">h2. Bootstrap heading class .h2</p>
          <p class="h3">h3. Bootstrap heading class .h3</p>
          <p class="h4">h4. Bootstrap heading class .h4</p>
          <p class="h5">h5. Bootstrap heading class .h5</p>
          <p class="h6">h6. Bootstrap heading class .h6</p>
        </article>
        <article>
          <h1 class="text-center">Customized Headings</h1>

          <h3>
            h3 Heading
            <small class="text-muted">
              With faded secondary text that uses text-muted
            </small>
          </h3>
        </article>
        <hr />
        <article>
          <h1 id="inline-text-elements" class="text-center">
            Inline Text Elements
          </h1>
          <p>
            You can use the <strong>mark</strong> tag to
            <mark>highlight</mark>text.
          </p>
          <p>
            <del>
              Use the <strong>del</strong> tag to show a text as deleted.
            </del>
          </p>
          <p>
            <u>
              This line of text will render as underlined. It uses the u tag.
            </u>
          </p>
          <p>
            <small>
              Use the <strong>small</strong> tag for fine or small print.
            </small>
          </p>
          <p>
            <strong>Use the strong tag for bold text.</strong>
          </p>
          <p>
            <em>
              Use the <strong>em</strong> tag for italicized text.
            </em>
          </p>
        </article>
        <hr />
        <article class="col" id="text-alignment">
          <h1 class="text-centered">Text alignment</h1>
          <p class="text-justify">
            This paragraph uses the <strong>text-justify</strong> class.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus
            sit amet fermentum. Donec sed odio operae, eu vulputate felis
            rhoncus. Praeterea iter est quasdam res quas ex communi.Cras mattis
            iudicium purus sit amet fermentum.
          </p>
          <p class="text-left">
            Use <strong>text-left</strong> for Left aligned text on all viewport
            sizes.
          </p>
          <p class="text-center">
            Use <strong>text-center</strong> for Center aligned text on all
            viewport sizes.
          </p>
          <p class="text-right">
            Use <strong>text-right</strong> for Right aligned text on all
            viewport sizes.
          </p>
          <p class="text-sm-right">
            Use <strong>text-sm-right</strong> for right aligned text on
            viewports sized SM. (small) or wider.
          </p>
          <p class="text-md-right">
            Use <strong>text-md-right</strong> for right aligned text on
            viewports sized MD (medium) or wider.
          </p>
          <p class="text-lg-right">
            Use <strong>text-lg-right</strong> for right aligned text on
            viewports sized LG (large) or wider.
          </p>
          <p class="text-xl-left">
            Use <strong>text-xl-left</strong> for Left aligned text on viewports
            sized XL (extra-large) or wider.
          </p>
        </article>
        <article>
          <h1 class="text-center" id="text-transform">
            Text transform
          </h1>
          <p>Transform text in components with text capitalization classes.</p>
          <p class="text-lowercase">
            Use <strong>text-lowercase</strong> for Lowercased text.
          </p>
          <p class="text-uppercase">
            Use <strong>text-uppercase</strong> for Uppercased text.
          </p>
          <p class="text-capitalize">
            Use <strong>text-capitalize</strong> to capitalize the first letter
            in each word.
          </p>
        </article>
      </div>
    </section>
  );
};

export default LightPage;
