import { h, Component } from "preact";
import { pickRandom } from "../utils";
import { WordsV1 } from "../generators/v1";

type Props = {};

type State = {
  /** True when the generator is running. */
  rolling: boolean;
  /** The 3 words that will be generated. */
  words: [string, string, string];
  /** Current word that we're generating. */
  current: number;
};

const ODDS = WordsV1.Subject.length * WordsV1.Adjective.length * WordsV1.Action.length;

/**
 * This component renders the V1 version of the application.
 */
export class LegacyView extends Component<Props, State> {

  /** State of the component. */
  public state: State = {
    current: 0,
    rolling: false,
    words: ["", "", ""],
  };

  /**
   * Rolls the roulette style generator.
   */
  private roll = (ev: MouseEvent) => {
    ev.preventDefault();

    this.setState({ rolling: true });

    // track the current word that we're on
    let current = 0;
    let words: [string, string, string] = ["", "", ""];

    // start another interval timer for the word scramble
    let t1 = setInterval(() => {
      if (current < 1) {
        words[0] = pickRandom(WordsV1.Adjective);
      }

      if (current < 2) {
        words[1] = pickRandom(WordsV1.Subject);
      }

      if (current < 3) {
        words[2] = pickRandom(WordsV1.Action);
      }

      this.setState({ current, words });
    }, 50);

    // start an interval timer to pick each word
    let t2 = setInterval(() => {
      current += 1;
      if (current >= 3) {
        clearInterval(t1);
        clearInterval(t2);
        this.setState({ rolling: false });
      }
    }, 1500);
  }

  /**
   * Renders the component.
   */
  public render({ }: Props, { words, rolling, current }: State) {
    let classes = "Words";
    if (rolling) { classes += ` isRolling onWord${current}`; }

    return (
      <div class="LegacyView">
        <header class="Header">
          <img src="logo.jpg" alt="Drawfee" id="logo" />
        </header>
        <section class="Roulette">
          <div class={classes}>
            <span class="Words-Word">{words[0]} </span>
            <span class="Words-Word">{words[1]} </span>
            <span class="Words-Word">{words[2]}</span>
          </div>
          <button disabled={rolling} onClick={this.roll}>Tell me what to draw</button>
        </section>
        <footer class="Footer">
          <p class="Footer-Odds">There are a total of {ODDS} possibilities.</p>
          <p>Check out Drawfee on <a href="https://www.youtube.com/user/Drawfee">YouTube</a> or at <a href="http://www.drawfee.com/">Drawfee.com</a></p>
          <p>Generator made by <a href="http://nick-glenn.com">Nick Glenn</a></p>
        </footer>
      </div>
    );
  }

}