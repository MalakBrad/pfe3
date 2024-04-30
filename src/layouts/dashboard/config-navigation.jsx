import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Tableau de Bord',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Utilisateur',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
 
  {
    title: "Direction Support",
    path: '/dashboard/Support', 
  },
  {
    title: 'Filières',
    path: '/dashboard/Filiere',
    
    
  },
  {
    title: "Plan d'action",
    path: '/dashboard/actions',
    
  },
  
  {
    title: 'Prestataires ',
    path: '/dashboard/Pres',
    
  },
  
{
    title: 'Nouveau Produit',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
{
    title: 'Politique Qualité ',
    path: '/dashboard/politique',
  },
  
  
];

export default navConfig;
