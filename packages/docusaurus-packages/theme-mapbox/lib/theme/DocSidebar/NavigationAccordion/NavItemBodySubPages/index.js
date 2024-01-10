// Sub Sub pages, used in very few instances
const NavItemBodySubPages = (subPages, activeItem) => {
  const subs = subPages.map((subPage, index) => {
    return (
      <li key={subPage.label}>
        <Link
          href={subPage.href}
          className={classnames(
            'pl12 inline-block w-full color-blue-on-hover border-l border--gray-light border-l--2',
            {
              'color-blue': activeItem === subPage.href,
              pb6: subPages.length - 1 !== index
            }
          )}
        >
          {subPage.label}
        </Link>
      </li>
    );
  });
  return <ul className="my6 ml3 txt-ms">{subs}</ul>;
};

export default NavItemBodySubPages;
