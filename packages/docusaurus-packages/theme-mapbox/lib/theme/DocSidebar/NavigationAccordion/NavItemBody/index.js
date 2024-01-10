import classnames from 'classnames';
import Link from '@docusaurus/Link';
import DocsTag from '@theme/DocsTag';

import NavItemBodySubPages from '../NavItemBodySubPages';

const NavItemBody = ({ subItems, activeItem, sectionId }) => {
  const subItemEls = subItems.map((page) => {
    const tag = page.customProps?.tag ? page.customProps.tag : false;

    return (
      <li
        key={page.label}
        // Required on parents containing tags to prevent unwanted scrollbars on IE
        className={classnames('mb3', {
          //'overflow-hidden': page.tag
        })}
      >
        <Link
          className={classnames('inline-block w-full color-blue-on-hover', {
            'color-blue': activeItem === page.href
          })}
          href={page.href}
        >
          {page.label}
          {tag && (
            <span className="ml6 relative" style={{ top: -1 }}>
              <DocsTag theme={tag} small={true} icon={true} />
            </span>
          )}
        </Link>
        {activeItem && activeItem.includes(page.href) && page.items && (
          <NavItemBodySubPages subPages={page.items} activeItem={activeItem} />
        )}
      </li>
    );
  });

  return (
    <ul id={sectionId} className="mb12 ml12">
      {subItemEls}
    </ul>
  );
};

export default NavItemBody;
