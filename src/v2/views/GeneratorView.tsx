import { h, Component } from "preact";
import "./GeneratorView.scss";
import { promptSound } from "../audio";
import { pickRandom } from "../utils";
import { descriptions, subjects, actions } from "../words";

type Props = {};

type State = {
  /** When true, the retry button is hidden. */
  disabled: boolean;
  /** Generated prompt for the user. */
  prompt: string;
};

/**
 * This component renders the view for the generator itself.
 */
export class GeneratorView extends Component<Props, State> {

  /** State for the view. */
  public state: State = {
    disabled: true,
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

    this.setState({ disabled: true });

    setTimeout(() => {
      const result = [
        pickRandom(descriptions),
        pickRandom(subjects),
        pickRandom(actions),
      ].join(" ");

      promptSound.play();

      this.setState({
        prompt: result,
        disabled: false,
      });
    }, 1000);
  }

  /**
   * Renders the component.
   */
  public render({ }: Props, { prompt, disabled }: State) {
    const style = { opacity: (disabled ? 0 : 1) };

    return (
      <div class="GeneratorView">
        <header className="GeneratorView-Banner">
          Your Prompt
        </header>
        <section className="GeneratorView-Result" style={style}>
          {prompt}
        </section>
        <button disabled={disabled} onClick={this.roll}>
          I want another one
        </button>
      </div>
    );
  }

}