//import Glenffiddich12 from 'https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/12yo.png';
// import Glenffiddich14 from '../../Resources/Images/Scotch/14yo.png';
// import Aberlour from "../../Resources/Images/Scotch/91T1WZfI2bL._AC_SL1500_.jpg";
// import Dalmore from "../../Resources/Images/Scotch/dalmore-12-years-435366.png";
// import Glenfiddich15 from "../../Resources/Images/Scotch/glenfiddich_15_year_old_scotch_whiskey1.jpg";
// import Glenfiddich18 from "../../Resources/Images/Scotch/glenfiddich1861px5595nqL._AC_SX679_.jpg";
// import Glendronach12 from "../../Resources/Images/Scotch/grnob.12yov4.jpg";
// import BlackLabel from "../../Resources/Images/Scotch/johnnie-walker-black-label-scotch.jpg";
// import BlueLabel from "../../Resources/Images/Scotch/johnnie-walker-blue-label-scotch.jpg";
// import GoldLabel from "../../Resources/Images/Scotch/johnnie-walker-gold-label-scotch.jpg";
// import GreenLabel from "../../Resources/Images/Scotch/johnnie-walker-green-label-scotch.jpg";
// import Jura10 from "../../Resources/Images/Scotch/jura-10-years.jpg";
// import Macallan12 from "../../Resources/Images/Scotch/macallan.12yo.jpg";
// import Oban14 from "../../Resources/Images/Scotch/obnob.14yo.jpg";
// import Talisker from "../../Resources/Images/Scotch/talob.10yo.jpg";
// import Balvenie12 from "../../Resources/Images/Scotch/TheBalvenie12._AC_SL1500_.jpg";
// import Balvenie14  from "../../Resources/Images/Scotch/TheBalvenie14_AC_SL1500_.jpg";
// import Chivas12 from "../../Resources/Images/Scotch/Whisky_Scotch_Blended_-_Chivas_Regal.jfif";
// import Chivas18 from "../../Resources/Images/Scotch/Whisky_Scotch_Blended_-_Chivas_Regal_18_years__79988.1480634810.jfif";
// import RedLabel from "../../Resources/Images/Scotch/Whisky_Scotch_Blended_-_redlebel__79988.1480634810.jfif";




const tileData = [
       {
             img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/12yo.png",
             title: 'Glenffiddich 12Years',
             author: '$ 89.99',
       },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/14yo.png",
        title: 'Glenffiddich 14Y',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/91T1WZfI2bL._AC_SL1500_.jpg",
        title: 'Aberlour',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/dalmore-12-years-435366.png",
        title: 'Dalmore 12 Years',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/glenfiddich_15_year_old_scotch_whiskey1.jpg",
        title: 'Glenfiddich15',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/glenfiddich1861px5595nqL._AC_SX679_.jpg",
        title: 'Glenfiddich18',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/Glenfiddich12.jfif",
        title: 'Glendronach12',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/johnnie-walker-blue-label-scotch.jpg",
        title: 'BlueLabel',
        author: '$ 299.99',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/johnnie-walker-gold-label-scotch.jpg",
        title: 'GoldLabel',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/johnnie-walker-green-label-scotch.jpg",
        title: 'Green Label',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/johnnie-walker-black-label-scotch.jpg",
        title: 'Black Label',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/Whisky_Scotch_Blended_-_redlebel__79988.1480634810.jfif",
        title: 'Red Lebal',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/jura-10-years.jpg",
        title: 'Jura 10 Y',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/the-macallan-12-year-old-double-cask-whisky.jpg",
        title: 'Macallan 12Y',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/obnob.14yo.jpg",
        title: 'Oban 14Y',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/talob.10yo.jpg",
        title: 'Talisker 10Y',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/TheBalvenie12._AC_SL1500_.jpg",
        title: 'The Balvenie 12Y',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/TheBalvenie14_AC_SL1500_.jpg",
        title: 'The Balvenie 14Y',
        author: 'See Store',
    },
    {
        img: "https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/Whisky_Scotch_Blended_-_Chivas_Regal.jfif",
        title: 'Chivas Regal 12Y',
        author: 'See Store',
    },
    {
        img:"https://s3.us-east-2.amazonaws.com/www.everestliquoraustin.com/Images/scotch/scotch/Whisky_Scotch_Blended_-_Chivas_Regal_18_years__79988.1480634810.jfif",
        title: 'Chivas Regal 14Y',
        author: 'See Store',
    },


 ];

export default tileData;