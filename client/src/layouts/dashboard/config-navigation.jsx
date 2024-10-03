import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [


  //new_nav_to_add
  {
    title: 'demo',
    path: '/demo',
  },
];

export default navConfig;
