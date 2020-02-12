import { h, Component } from "preact";

/**
 * This is the entry view for the site.
 */
export class IntroView extends Component {

  /**
   * Renders the component.
   */
  public render() {
    return (
      <div className="IntroView">
        {/* <header className="IntroView-Header"></header> */}
        <section className="IntroView-Content">
          <p>Give me a prompt!</p>
        </section>
      </div>
    );
  }

}