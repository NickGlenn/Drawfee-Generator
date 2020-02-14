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
            Welcome to the <small>(unofficial)</small> Drawfee Generator; A tool for unleashing your own artistic abomination upon the unsuspecting world.
          </p>
          <hr />
          <p>
            This tool was created for the fans of <a href="https://www.youtube.com/drawfee" target="_blank">Drawfee</a>, and the <a href="/v1">original version</a> was even featured in 2 different episodes.
          </p>
          <div className="Info-Thumbnails">
            <a href="https://www.youtube.com/watch?v=P-mrh3qei0Y" target="_blank">
              <img src="http://i3.ytimg.com/vi/P-mrh3qei0Y/hqdefault.jpg" alt="Random Drawing Generator Challenge" />
            </a>
            <a href="https://www.youtube.com/watch?v=45QWowjFodI" target="_blank">
              <img src="http://i3.ytimg.com/vi/45QWowjFodI/hqdefault.jpg" alt="More Randomly Generated Drawing Challenges" />
            </a>
          </div>
          <hr />
          <p>
            This site was created by <a href="https://nick-glenn.com">Nick Glenn</a>. Sorry.
          </p>
        </div>
      </div>
    );
  }

}