import { h, Component } from "preact";
import { Generator } from "../components/Generator";
import { Info } from "../components/Info";

type Props = {};

type State = {
  /** Determines whether or not the info panel should be showing. */
  showingInfo: boolean;
};

/**
 * The root view for the application.
 */
export class MainView extends Component<Props, State> {

  /** The state of the component. */
  public state: State = {
    showingInfo: false,
  };

  /**
   * Shows the info component.
   */
  private showInfo = () => this.setState({ showingInfo: true });

  /**
   * Hides the info component.
   */
  private hideInfo = () => this.setState({ showingInfo: false });

  /**
   * Renders the component.
   */
  public render({ }: Props, { showingInfo }: State) {
    return (
      <div>
        <Generator onInfoClick={this.showInfo} />
        <Info show={showingInfo} onDismiss={this.hideInfo} />
      </div>
    );
  }

}