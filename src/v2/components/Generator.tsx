import { h, Component } from "preact";
import { promptSound } from "../audio";
import { generate } from "../generator";
import "./Generator.scss";

type Props = {
  /** Called when the "show info" button is pressed. */
  onInfoClick(): void;
};

type State = {
  /** When true, the Drawfee prompt sound will play. */
  playSound: boolean;
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
    playSound: true,
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
      const result = generate();

      if (this.state.playSound) {
        promptSound.play();
      }

      this.setState({
        prompt: result,
        rolling: false,
      });
    }, 1000);
  }

  /**
   * Toggles sounds on and off.
   */
  private toggleSound = (ev: MouseEvent) => {
    ev.preventDefault();
    const playSound = !this.state.playSound;
    this.setState({ playSound });
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
  public render({ }: Props, { prompt, rolling, playSound }: State) {
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
          <button onClick={this.toggleSound}>
            Sounds: {playSound ? "ON" : "OFF"}
          </button>
          <button onClick={this.handleShowInfoClick}>
            More
          </button>
        </footer>
      </div>
    );
  }

}