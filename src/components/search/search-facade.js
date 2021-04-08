import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class SearchFacade extends React.PureComponent {
  render() {
    const buttonProps = {
      ...(!this.props.useModal && { onFocus: this.props.loadSearch })
    };
    if (this.props.resultsOnly) return <div />;
    return (
      <div className="h36 relative">
        <button
          className="w-full block"
          onClick={this.props.loadSearch}
          {...buttonProps}
        >
          {this.props.useModal ? (
            <SearchButton {...this.props} />
          ) : (
            <SearchInput {...this.props} />
          )}
        </button>
      </div>
    );
  }
}

SearchFacade.propTypes = {
  loadSearch: PropTypes.func.isRequired,
  resultsOnly: PropTypes.bool.isRequired,
  useModal: PropTypes.bool.isRequired
};

export class SearchButton extends React.PureComponent {
  render() {
    const { background, narrow } = this.props;
    return (
      <div
        className={classnames(
          'flex-parent flex-parent--center-cross btn--gray color-gray-light btn btn--stroke py3 pl6 pr12 round mb6',
          {
            'btn--white': background !== 'light',
            wmax30: narrow,
            'w-full': !narrow
          }
        )}
        style={narrow ? { paddingLeft: '12px', paddingRight: '12px' } : {}}
      >
        <span
          className={classnames('', {
            mr6: !narrow,
            'color-gray': background === 'light'
          })}
        >
          <svg className="icon w18 h18">
            {narrow && <title>Search</title>}
            <use xlinkHref="#icon-search" />
          </svg>
        </span>{' '}
        {!narrow && (
          <span
            className={classnames('', {
              'color-gray': background === 'light'
            })}
          >
            Search
          </span>
        )}
      </div>
    );
  }
}

SearchButton.defaultProps = {
  background: 'light'
};

SearchButton.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  narrow: PropTypes.bool
};

export class SearchInput extends React.PureComponent {
  render() {
    const {
      placeholder,
      getLabelProps,
      useModal,
      getInputProps,
      autoFocus,
      isLoading
    } = this.props;
    const labelProps = {
      ...(getLabelProps && getLabelProps())
    };
    const inputProps = {
      ...(getInputProps && getInputProps)
    };
    return (
      <>
        <label className="cursor-pointer" {...labelProps}>
          <div
            className={classnames(
              'absolute flex-parent flex-parent--center-cross flex-parent--center-main',
              {
                'w60 h60': useModal,
                'w36 h36': !useModal
              }
            )}
          >
            <svg
              className={classnames('icon color-gray', {
                'w24 h24': useModal,
                'w18 h18': !useModal
              })}
            >
              <title>Search</title>
              <use xlinkHref="#icon-search" />
            </svg>
          </div>
          {isLoading && (
            <div
              className="loading loading--s absolute bg-white"
              style={{
                top: useModal ? '21px' : '10px',
                right: '26px',
                zIndex: 5
              }}
            />
          )}
        </label>
        <input
          autoFocus={autoFocus}
          placeholder={placeholder}
          className={classnames('input bg-white', {
            'px60 h60 txt-l': useModal,
            'px36 h36': !useModal
          })}
          {...inputProps}
        />
      </>
    );
  }
}

SearchInput.propTypes = {
  autoFocus: false
};

SearchInput.propTypes = {
  getLabelProps: PropTypes.func,
  getInputProps: PropTypes.object,
  useModal: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  isLoading: PropTypes.bool
};
