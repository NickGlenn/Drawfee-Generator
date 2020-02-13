import { h, Component } from "preact";
import { promptSound } from "../audio";
import { pickRandom } from "../utils";
import { descriptions, subjects, actions } from "../words";
import "./Generator.scss";

type Props = {
  /** Called when the "show info" button is pressed. */
  onInfoClick(): void;
};

type State = {
  /** When true, the retry button is hidden. */
  rolling: boolean;
  /** Generated prompt for the user. */
  prompt: string;
};

/**
 * This component renders the view for the generator itself.
 */
export class Generator extends Component<Props, State> {

  /** State for the view. */
  public state: State = {
    rolling: true,
    prompt: "_",
  };

  /**
   * Fires when the component first mounts.
   */
  public componentDidMount() {
    this.roll();
  }

  /**
   * Runs the generator to create a prompt.
   */
  private roll = (ev?: MouseEvent) => {
    ev?.preventDefault();

    this.setState({ rolling: true });

    setTimeout(() => {
      const result = [
        pickRandom(descriptions),
        pickRandom(subjects),
        pickRandom(actions),
      ].join(" ");

      promptSound.play();

      this.setState({
        prompt: result,
        rolling: false,
      });
    }, 1000);
  }

  /**
   * Handles the event click for show info.
   */
  private handleShowInfoClick = (ev: MouseEvent) => {
    ev.preventDefault();
    this.props.onInfoClick();
  }

  /**
   * Renders the component.
   */
  public render({ }: Props, { prompt, rolling }: State) {
    let classes = "Generator";
    if (rolling) { classes += " isRolling"; }

    return (
      <div class={classes}>
        <header className="Generator-Banner">
          Your Prompt
        </header>
        <section className="Generator-Result">
          {prompt}
        </section>
        <footer className="Generator-Footer">
          <button disabled={rolling} onClick={this.roll}>
            I want another one
          </button>
          <button onClick={this.handleShowInfoClick}>
            More
          </button>
        </footer>
      </div>
    );
  }

}