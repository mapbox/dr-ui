import React from 'react';
import PageShell from './page-shell';
import Feedback from '@mapbox/dr-ui/feedback';
import constants from '../constants.json';

export default class MarkdownPageshell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: undefined
    };
  }

  componentDidMount() {
    MapboxPageShell.afterUserCheck(() => {
      // fetches username so we can identify them in segment
      this.setState({
        userName: MapboxPageShell.getUser()
          ? MapboxPageShell.getUser().id
          : undefined
      });
    });
  }

  render() {
    return (
      <PageShell {...this.props}>
        <div className="prose">
          {this.props.frontMatter.title !== 'Overview' && (
            <h1 className="txt-fancy">{this.props.frontMatter.title}</h1>
          )}
          {this.props.children}
          {this.props.frontMatter.layout !== 'cards' &&
            this.props.frontMatter.feedback !== false && (
              <div className="mt36">
                <Feedback
                  site={constants.SITE}
                  location={this.props.location}
                  userName={this.state.userName}
                  webhook={constants.FORWARD_EVENT_WEBHOOK}
                />
              </div>
            )}
        </div>
      </PageShell>
    );
  }
}
