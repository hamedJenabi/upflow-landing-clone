/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import backgroundImage from './background.svg';
import illustration from './illustration.svg';

import colImage from './phone.png';
import fomoLogo from './fomoLogo.svg';
// import quickSetup from './quicksetup.svg';
import presentImage from './presentation.png';
import socialMedia_1 from './socialMedia_1.png';
import optimize from './optimize.svg';
import videoPlay from './videopreview.svg';

const mainCss = css`
  font-size: 14px;

  background-image: linear-gradient(180deg, #fdf2e4 0%, #fafafa 800px);
  letter-spacing: -1px;

  h1 {
    font-size: 50px;
    margin-bottom: 12px;
    color: #474ba5;
    font-weight: 700;
  }
  h3 {
    box-sizing: border-box;
    color: #474ba5;
    display: block;
    font-size: 1.17em;
    margin-top: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;
const headerStyle = css`
  padding: 12px 0;
  position: relative;
  font-family: 'National2', arial, sans-serif;
  height: 64px;
  z-index: 2;
`;

const containerFluid = css`
  margin-right: auto;
    margin-left: auto;
    padding-right: 12px;
    padding-left: 12px;
}
`;
const headerWrapper = css`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  nav {
    display: block;
  }
`;
const headerLogo = css`
  display: block;
  height: 24px;
  position: relative;
  z-index: 5;
  a {
    color: #474ba5;
    text-decoration: none;
  }

  /* display: block;
  height: 24px;
  position: relative;
  z-index: 5;
  color: #474ba5;
  text-decoration: none; */
`;
const headerMenu = css`
  vertical-align: middle;

  /* font-family: 'National2', arial, sans-serif;
  position: relative;
  padding: 0;
  width: 100%;
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  line-height: 1.3; */
  a {
    font-family: arial, sans-serif;
    margin: 0;
    padding: 10;
    list-style: none;
    width: 100%;
    margin-left: 48px;
    position: relative;
    font-size: 16px;
    text-decoration: none;
    font-weight: 500;
    color: #474ba5;
    font-variant-numeric: oldstyle-nums;
  }
`;
const logIn = css`
  font-family: 'National2', arial, sans-serif;
  background-color: #eba06d;
  padding-top: 12px;
  text-decoration: italic;
  padding: 10px 12px;
  color: #ffffff;
  font-weight: 500;
  font-style: italic;
`;

const headerBottun = css`
  /* position: relative;
  width: 30px;
  height: 22px;
  border: none;
  padding: 0;
  background: none;
  outline: none;
  z-index: 3;
  cursor: pointer;
  outline: 0;
  margin-right: 48px; */
`;
const hero = css`
  padding-top: 72px;
  padding-bottom: 72px;
  text-align: center;
  box-sizing: border-box;
`;
const container = css`
  /* box-sizing: border-box;
  
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 12px;
  padding-left: 12px;
  justify-content: center; */
  display: flex;
  margin-right: auto;
  margin-left: auto;
  padding-right: 12px;
  padding-left: 12px;
  max-width: 1280px;
`;

const row = css`
  margin-left: -12px;
  margin-right: -12px;
  align-items: center;
  font-family: 'National2', arial, sans-serif;
  width: 100%;
  display: flex;
`;
const heroImage = css`
  /* display: block;
  height: 24px;
  position: relative;
  z-index: 5;
  max-width: 100%; */
  max-height: 384px;
  min-height: 384px;
`;
const heroText = css`
  padding-right: 12px;
  padding-left: 12px;
  width: 100%;
  max-width: 50%;
  flex-basis: 50%;
  box-sizing: border-box;
  color: #474ba5;
  font-weight: 700;
`;
const sectionStyle = css`
  padding-top: 72px;
  padding-bottom: 72px;
  display: block;
`;

const sectionImage = css`
  align-items: center;
  position: relative;
  box-sizing: border-box;
  max-height: 250px;
`;
const sectionCenter = css`
  /* text-align: center; */
`;
const optimizeTable = css`
  /* background-color: rgba(235, 160, 109, 0.08);
  border-radius: 3px;
  padding: 15px 11px 15px 12px;
  color: #e2691e;
  font-size: 14px;
  line-height: 22px;
  font-style: italic;
  text-align: left; */
`;

const col6 = css`
  /* max-width: 50%;
  flex-basis: 50%;
  box-sizing: border-box;
  padding-right: 12px;
  padding-left: 12px;
  width: 100%; */
`;
const col3 = css`
  /* max-width: 25%;
  flex-basis: 25%;
  box-sizing: border-box;
  padding-right: 12px;
  padding-left: 12px;
  width: 100%; */
`;
const iconPlay = css`
  /* margin-right: 0;
  margin-left: 0;
  display: block;
  content: '\e83b'; */
`;

const bottunGroup = css`
  /* display: inline-block;
  overflow: hidden;
  margin: 0;
  padding: 0 12px;
  font-size: 16px;
  font-family: inherit;
  font-style: italic;
  height: 40px;
  border: 2px solid transparent;
  border-radius: 3px;
  background: #e4996d;
  color: #ffffff;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: inherit;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -ms-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  line-height: 36px;
  cursor: pointer;
  -webkit-font-smoothing: inherit;
  font-weight: 500;
  outline: 0; */
  font-style: italic;
  text-decoration: none;
`;
const bottunGroupRound = css`
  /* border-radius: 3px;
  
  font-weight: 500;
  line-height: 25px;
  text-transform: none;
   */
  text-decoration: none;
  font-style: italic;

  background-color: transparent;
  color: #eba06d;
  border: 1px solid #eba06d;
  font-size: 14px;
  padding: 5px;
`;
const bottunGroupWrapper = css`
  background: #e4996d;
  color: #ffffff;
  vertical-align: middle;
  text-align: center;
  padding: 20px 10px 20px 10px;
  width: 30%;
`;
const bottunGroupLarge = css`
  /* height: auto;
  padding: 20px 45px 25px 45px;
  font-size: 24px;
  border-radius: 50px;
  text-decoration: none; */
`;
const testimonial = css`
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-top: 72px;
  padding-bottom: 72px;
  width: 1256px;
  padding-left: 460px;
`;
const reviewSection = css`
  padding-top: 72px;
  padding-bottom: 72px;
  h2 {
    color: #474ba5;
    font-weight: bolder;
  }
  p {
    color: #474ba5;
    width: 80%;
  }
`;
// const sectionText = css`
//   justify-content: center;
//   text-align: center;
//   padding-top: 72px;
//   padding-bottom: 72px;
//   width: 1256px;
//   max-width: 50%;
//   flex-basis: 50%;
//   align-items: center;
// `;

const videoText = css`
  /* margin-bottom: 24px;
  color: #ffffff; */
`;
const colSm = css`
  max-width: 100%;

  flex-basis: 100%;
  padding-right: 12px;
  padding-left: 12px;
  width: 100%;
  h2 {
    color: #474ba5;
    font-weight: 700;
  }
  p {
    color: #474ba5;
    font-size: 18px;
  }
`;
const presentationWrapper = css`
  text-align: center;
  width: 596px;
  height: 272px;
  max-width: 100%;
  zoom: 1;
`;
const presentationBackground = css`
  /* width: 796px;
  height: 672px; */
  max-width: 100%;
  padding-left: 420px;
`;
// const quickSetupBackground = css`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   z-index: -1;
//   text-align: left;
//   box-sizing: border-box;
// `;

const testimonialsCarouselText = css`
  position: relative;
  display: block;
  width: 40%;

  font-weight: 400;
  margin-bottom: 12px;
  text-align: center;
  h3 {
    font-style: italic;
  }
`;

// const owlTestimonial = css`
//   display: none;
//   width: 100%;
//   -webkit-tap-highlight-color: transparent;
//   position: relative;
//   z-index: 1;
// `;
// const owlStageOuter = css`
//   position: relative;
//   overflow: hidden;
//   box-sizing: border-box;
// `;

/* webkit-transform: translate3d(0px, 0px, 0px); */
// const owlItem = css`
//   touch-action: pan-y;
//   user-select: none;
//   position: relative;
//   float: left;
//   min-height: 1px;
// `;

function App() {
  return (
    <div css={mainCss}>
      <header css={headerStyle}>
        <div css={containerFluid}>
          <div css={headerWrapper}>
            <img css={headerLogo} src={fomoLogo} alt="" />
            <nav css={headerMenu}>
              <a href="#a">pricing</a>
              <a href="#a">integration</a>
              <a href="#a">features</a>
              <a href="#a">review</a>
              <a href="#a">blog</a>
              <a href="#a">log in</a>
              <a css={logIn} href="#a">
                sing up
              </a>
            </nav>
          </div>
        </div>
      </header>
      <div css={hero}>
        <div css={container}>
          <div css={row}>
            <img css={heroImage} src={illustration} alt="illustration" />
            <div src={heroText}>
              <h1
                css={css`
                  text-align: left;
                `}
              >
                honesty is the <br />
                best marketing
              </h1>
              <p
                css={css`
                  color: #474ba5;
                  font-size: 24px;
                  text-align: left;
                `}
              >
                Fomo increases trust, credibility, and sales with{' '}
                <strong
                  css={css`
                    font-style: italic;
                  `}
                >
                  live social proof
                </strong>
              </p>
              <div>
                <div css={bottunGroupWrapper}>
                  <a
                    css={css`
                      text-decoration: none;
                      padding-top: 40px;
                      color: #ffffff;
                      font-style: italic;
                      letter-spacing: -1px;
                    `}
                    href="/app/register"
                  >
                    start a free trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section css={testimonial}>
        <div css={container}>
          <div css={row}>
            <div css={testimonialsCarouselText}>
              <div
                css={css`
                  align-items: center;
                `}
              >
                <h3
                  css={css`
                    font-weight: 400;
                  `}
                >
                  “Does exactly what it's supposed to -- drives a sense of
                  urgency for your customers who will feel the need to 'get it
                  first.' Also, rockstar support.”
                </h3>

                <p>
                  - Ryan, founder at{' '}
                  <span class="v3-color-brand-primary">Hunt a Killer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        css={css`
          padding: 20px 0px 20px 0px;
        `}
      >
        <div css={container}>
          <div css={row}>
            <div
              css={css`
                display: flex;
                padding-left: 200px;
              `}
            >
              <div css={reviewSection}>
                <h2>
                  13,878 websites <br /> use Fomo, their way
                </h2>
                <p>
                  small and large enterprises alike drive meaningful revenue
                  with Fomo.
                </p>

                <div css={bottunGroup}>
                  <a href="/customers" css={bottunGroupRound}>
                    read <span id="review_count_top"></span> reviews
                  </a>
                </div>
              </div>
              <img css={sectionImage} src={colImage} alt="phone" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div css={row}>
            <div css={colSm}>
              <h2
                css={css`
                  text-align: center;
                `}
              >
                your brand, your story
              </h2>
              <p
                css={css`
                  text-align: center;
                  padding-bottom: 32px;
                `}
              >
                customize notifications to match your site design.
                <br />
                use page rules to enhance the user journey.
              </p>
            </div>
          </div>
          <div css={colImage}>
            <div css={presentationWrapper}>
              <div css={presentationBackground}>
                <img src={presentImage} alt="presentation" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section css={sectionStyle}>
        <div css={container}>
          <div css={row}>
            <div css={colSm}>
              <h2>quick setup</h2>
              <p>
                increase conversions{' '}
                <strong class="v3-font-medium">in minutes.</strong> <br />
                integrate 89+ apps even faster.
              </p>
              <div css={bottunGroup}>
                <a href="/integrations" css={bottunGroupRound}>
                  check all integrations
                </a>
              </div>
            </div>

            <div css={sectionImage}>
              <div>
                <img src={socialMedia_1} alt="SocialMediaPicture"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section css={sectionStyle}>
        <div css={container}>
          <div css={row}>
            <div css={colSm}>
              <h2>optimize</h2>
              <p>
                we apply{' '}
                <a href="https://blog.fomo.com/insights/" target="blank">
                  machine learning
                </a>{' '}
                to 6 billion rows of buying behaviors to find the best
                conversion settings for your website.
              </p>
              <p>be a data-driven marketer with Fomo.</p>
            </div>

            <div css={sectionImage}>
              <div>
                <img src={optimize} alt="optimize"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section css={sectionCenter}>
        <div css={container}>
          <div css={row}>
            <div css={optimizeTable}>
              <div css={row}>
                <div css={col6}>Increase Initial delay</div>
                <div css={col3}>CTR</div>
                <div css={col3}>↑ up to 96.7%</div>
              </div>
              <div css={row}>
                <div css={col6}>Display in random order</div>
                <div css={col3}>ITC</div>
                <div css={col3}>↑ up to 69.2%</div>
              </div>
              <div css={row}>
                <div css={col6}>Display in random order</div>
                <div css={col3}>ITC</div>
                <div css={col3}>↑ up to 69.2%</div>
              </div>
              <div css={row}>
                <div css={col6}>Display in random order</div>
                <div css={col3}>ITC</div>
                <div css={col3}>↑ up to 69.2%</div>
              </div>
              <div css={row}>
                <div css={col6}>Display in random order</div>
                <div css={col3}>ITC</div>
                <div css={col3}>↑ up to 69.2%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div css={container}>
          <div css={row}>
            <div>
              <h2 css={videoText}>learn how we make marketing easier</h2>

              <div class="button-group">
                <a
                  href="#a"
                  class="button button--brand-primary button--large button--rounded button--icon js--preview-video-button"
                  data-remodal-target="0"
                >
                  <span class="icon-play"></span>
                  play the video
                </a>
              </div>
            </div>
          </div>
          <div css={bottunGroup}>
            <a css={{ bottunGroupLarge, bottunGroupRound }} href="#a">
              <span css={iconPlay}></span>
              play the video
            </a>
          </div>
          <div>
            <img src={videoPlay} alt="videoPlay" />
          </div>
        </div>
      </section>
      <section css={sectionStyle}>
        <div css={container}>
          <div css={row}>
            <div class="section__text col-sm-12">
              <h2>sometimes you have to give a FAQ</h2>
            </div>

            <div class="key-benefits__item col-xs-8 col-sm-6 col-md-4">
              <h5>how do I calculate the ROI of Fomo?</h5>
              <p>
                our dashboard does that automatically. you can also{' '}
                <a href="https://blog.fomo.com/tag/ab-testing/" target="">
                  run an A/B test
                </a>
                .
              </p>
            </div>

            <div class="key-benefits__item col-xs-8 col-sm-6 col-md-4">
              <h5>can I use this to fake notifications?</h5>
              <p>
                <a href="https://blog.fomo.com/having-a-vision-works" target="">
                  our vision
                </a>{' '}
                is to give honest entrepreneurs the credibility they deserve. if
                you’re dishonest, go away.
              </p>
            </div>

            <div class="key-benefits__item col-xs-8 col-sm-6 col-md-4">
              <h5>I don't sell products. can I still use Fomo?</h5>
              <p>
                if you have a website you’re asking for something. attention.
                emails. comments. Fomo can help.
              </p>
            </div>

            <div class="key-benefits__item col-xs-8 col-sm-6 col-md-4">
              <h5>what is social proof marketing?</h5>
              <p>
                nobody cares what you say about your business. social proof
                marketing is when{' '}
                <a
                  href="https://blog.fomo.com/social-proof/"
                  alt="what is social proof"
                  target=""
                >
                  customers sell for you
                </a>
                .
              </p>
            </div>

            <div class="key-benefits__item col-xs-8 col-sm-6 col-md-4">
              <h5>do I have to know how to code?</h5>
              <p>
                coding is for losers. Fomo connects seamlessly with 100s of your
                favorite apps. losers:{' '}
                <a href="/docs" target="">
                  here’s our API.
                </a>
              </p>
            </div>

            <div class="key-benefits__item col-xs-8 col-sm-6 col-md-4">
              <h5>is this thing legit?</h5>
              <p>
                we’re either con artists or 6,022 companies are lying. read our{' '}
                <a href="https://blog.fomo.com/tag/case-study/" target="">
                  <span id="case-study-count"></span> case studies
                </a>
                or <a href="/customers">250+ 5-star reviews</a>.
              </p>
            </div>
          </div>
          <div css={bottunGroup}>
            <div css={bottunGroupLarge}>
              <a href="/app/register">14 day free trial</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
