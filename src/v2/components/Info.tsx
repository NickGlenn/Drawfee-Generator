import { h, Component } from "preact";
import "./Info.scss";

type Props = {
  /** Determines whether or not this component should be showing. */
  show: boolean;
  /** Called when the info panel is dismissed. */
  onDismiss(): void;
};

/**
 * This component displays information about the site and provides a link to the original version.
 */
export class Info extends Component<Props> {

  /**
   * Renders the component.
   */
  public render({ show, onDismiss }: Props) {
    let classes = "Info";
    if (show) { classes += " isShowing"; }

    return (
      <div className={classes}>
        <div className="Info-Overlay" onClick={onDismiss} />
        <div className="Info-Content">
          <p>
            Welcome to the <small>(unofficial)</small> Drawfee Generator; A goofy little tool for unleashing your own artistic abomination upon the unsuspecting world!
          </p>
          <p>
            This tool was created for fans of <a href="https://www.youtube.com/drawfee" target="_blank">Drawfee</a> and the <a href="/v1">original version</a> was even featured in 2 different episodes.
          </p>
        </div>
      </div>
    );
  }

}