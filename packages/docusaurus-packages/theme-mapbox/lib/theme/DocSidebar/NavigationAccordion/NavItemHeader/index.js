import classnames from 'classnames';
import Link from '@docusaurus/Link';
import Icon from '@mapbox/mr-ui/icon';
import DocsTag from '@theme/DocsTag';

const NavItemHeader = ({
  nav,
  hasChildren,
  isActiveToggle,
  isActiveSection,
  sectionId,
  setToggle,
  external,
  hideChildrenInNav
}) => {
  const { label, href } = nav;
  const tag = nav.customProps?.tag ? nav.customProps.tag : false;
  return (
    <div
      className={classnames(
        'px12 flex txt-uppercase txt-fancy round-full w-full',
        {
          'bg-blue-faint color-blue-deep': isActiveSection,
          'flex flex--space-between-main': hasChildren
        }
      )}
    >
      <Link
        href={href}
        className="flex-child-grow color-blue-on-hover py6 py3-mm txt-spacing05"
        onClick={() => setToggle(label, true)}
      >
        {label}
        {tag && (
          <span className="ml6 relative" style={{ top: -1 }}>
            <DocsTag theme={tag} small={true} icon={true} />
          </span>
        )}
        {external && (
          <span className="ml3 color-gray">
            <Icon name={'share'} inline={true} />
          </span>
        )}
      </Link>
      {hasChildren && !hideChildrenInNav && (
        <button
          className="flex-child-no-shrink color-blue-on-hover px12 px0-mm"
          onClick={() => setToggle(label)}
          aria-label={`Toggle ${label} menu`}
          aria-controls={sectionId}
          aria-expanded={isActiveSection}
          value={label}
        >
          <Icon
            name={
              isActiveSection || isActiveToggle ? 'chevron-up' : 'chevron-down'
            }
            inline={true}
          />
        </button>
      )}
    </div>
  );
};

export default NavItemHeader;
