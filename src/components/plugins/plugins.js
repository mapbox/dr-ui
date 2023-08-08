import React from 'react';
import PropTypes from 'prop-types';
import slug from 'slugg';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import md from '../md';
import entries from 'object.entries';
import IconText from '@mapbox/mr-ui/icon-text';
import AppropriateImage from '../../../docs/src/components/appropriate-image';

export default class Plugins extends React.PureComponent {
  render() {
    return (
      <div>
        <div id="plugins" className="plugins-page" data-swiftype-index="true">
          {entries(this.props.pluginData).map(([title, plugins], i) => (
            <div key={i}>
              <h2 className="anchor">
                <a
                  className={`unprose color-blue-on-hover`}
                  href={`#${slug(title)}`}
                  style={{ marginTop: '-30px' }}
                  id={slug(title)}
                >
                  {title} ({entries(plugins.plugins).length})
                </a>
              </h2>

              <div className="pb24">{md(plugins.description)}</div>
              {entries(plugins.plugins).map(([name, plugin], i) => (
                <div
                  key={i}
                  className="pb18 mb18 border-b border--darken10 flex flex--column flex--row-mm"
                >
                  <div
                    className="round relative mr24-mm flex-child-no-shrink mb12 mb0-mm h180 w-full w-1/3-mm"
                    // style={{ height: 115, width: 160 }}
                  >
                    {plugin.image && (
                      <AppropriateImage
                        imageId={plugin.image}
                        alt={`thumbnail image for Mapbox GL JS plugin ${name}`}
                        background
                      />
                    )}
                  </div>
                  <div className="flex-child-grow">
                    <div className="mb6 txt-bold">{name}</div>
                    <div className="color-gray color-gray-on-hover mb6 prose">
                      {md(plugin.description)}
                    </div>

                    <div className="">
                      {plugin.website && (
                        <div>
                          <a className="link link--blue" href={plugin.website}>
                            <IconText
                              iconBefore={
                                plugin.website.includes('github')
                                  ? 'github'
                                  : 'globe'
                              }
                            >
                              View this project
                            </IconText>
                          </a>
                        </div>
                      )}
                      {plugin.example && (
                        <div className="mt6">
                          <a
                            className="link link--blue"
                            href={prefixUrl(`/example/${plugin.example}`)}
                          >
                            <IconText iconBefore="code">View example</IconText>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Plugins.propTypes = {
  pluginData: PropTypes.object
};
