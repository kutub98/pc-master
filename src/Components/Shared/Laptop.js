import React from "react";
const {
  Square3Stack3DIcon,
  ChevronDownIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
} = require("@heroicons/react/24/outline");
const {
  MenuItem,
  Typography,
  MenuHandler,
  ListItem,
  MenuList,
  Collapse,
  Menu,
  Chip,
} = require("@material-tailwind/react");

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const laptopTypes = [
  {
    color: "blue",
    icon: DeviceTabletIcon,
    title: "Apple",
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    icon: DeviceTabletIcon,
    title: "Sumsung",
    description: "News and writings, press releases, and resources",
  },
  {
    color: "green",
    icon: DeviceTabletIcon,
    title: (
      <div className="flex items-center gap-1">
        ACCER{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="We're hiring!"
          className="capitalize"
        />
      </div>
    ),
    description: "We are always looking for talented people. Join us!",
  },
  {
    color: "blue-gray",
    icon: DeviceTabletIcon,
    title: "ASSUS",
    description: "All the stuff that we dan from legal made us add.",
  },
  {
    color: "blue-gray",
    icon: DeviceTabletIcon,
    title: "LENOVA",
    description: "Checkout our products that helps a startup running.",
  },
  {
    color: "teal",
    icon: DeviceTabletIcon,
    title: "HP",
    description: "Set of beautiful icons that you can use in your project.",
  },
  {
    color: "cyan",
    icon: DeviceTabletIcon,
    title: "WALTON",
    description: "High quality UI Kits helps you to 2x faster.",
  },
  {
    color: "pink",
    icon: DeviceTabletIcon,
    title: "SINGER",
    description: "List of all our open-source projects, it's all free.",
  },
];

const LaptopItems = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const MobileItemsRender = laptopTypes.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        className={`fixed inset-0 flex justify-center items-center mx-auto container max-w-7xl ${
          isMenuOpen ? "block" : "hidden"
        }`}
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        lockScroll
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Laptop
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl mx-auto rounded-xl lg:block fixed 0  left-0 right-0 top-0  container">
          <ul className="grid grid-cols-4 gap-y-2">{MobileItemsRender}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{MobileItemsRender}</Collapse>
      </div>
    </React.Fragment>
  );
};

export default LaptopItems;
