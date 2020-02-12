import { h, Component } from "preact";
import { GeneratorView } from "./GeneratorView";

type Props = {};

type State = {};

/**
 * The root view for the application.
 */
export class MainView extends Component<Props, State> {

  /**
   * Renders the component.
   */
  public render() {
    return (
      <GeneratorView />
    );
  }

}