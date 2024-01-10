import { render } from 'react-dom';
import NavItemBody from '../NavItemBody';
import NavItemHeader from '../NavItemHeader';

const NavSection = ({ sectionNav, activeToggles, setToggle, currentPage }) => {
  const { type, label, href, docId, items, customProps, unlisted } = sectionNav;

  // If section has custom props, dont render subpages in sidebar
  const hideChildrenInNav = customProps?.hideChildrenInNav ? true : false;

  // the section has sub pages
  const hasPages = type == 'category' && items.length > 0;
  // Get category path for pathchecking
  const categoryPath = hasPages
    ? sectionNav.label.replaceAll(' ', '').toLowerCase()
    : '';
  // the section's toggle is active (this menu has been open with arrow)
  const isActiveToggle =
    activeToggles.length > 0 ? activeToggles.indexOf(label) > -1 : '';
  // the section is active (currentPage is child of this section)
  const isActiveSection =
    (currentPage && currentPage.indexOf(href) > -1) ||
    (categoryPath && currentPage.indexOf(categoryPath) > -1);
  const sectionId = `menu-${docId}`;
  const external = type == 'link' && href.indexOf('https') > -1 ? true : false;

  return (
    <li key={label}>
      <NavItemHeader
        page={currentPage}
        nav={sectionNav}
        hasChildren={hasPages}
        isActiveToggle={isActiveToggle}
        isActiveSection={isActiveSection}
        sectionId={sectionId}
        setToggle={setToggle}
        external={external}
        hideChildrenInNav={hideChildrenInNav}
      />

      {hasPages && !hideChildrenInNav && isActiveToggle && (
        <NavItemBody
          subItems={items}
          activeItem={currentPage}
          sectionId={sectionId}
        />
      )}
    </li>
  );
};

export default NavSection;
