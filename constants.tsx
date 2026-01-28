import { ProductStatus, Section } from './types';

const DISCORD_LINK = "https://discord.gg/pvJG3Ww9xe";

export const NAVIGATION_LINKS = [
  { name: 'Forums', url: DISCORD_LINK },
  { name: 'Store', url: DISCORD_LINK },
  { name: 'Status', url: DISCORD_LINK },
  { name: 'Reviews', url: DISCORD_LINK },
];

export const DMA_SECTIONS: Section[] = [
  {
    title: "DMA Bundles",
    description: "Save big when you bundle our DMA items! The bundles are fully customizable, allowing you to choose both the firmware and aiming device. The 75t Cards are 10-15% faster.",
    products: [
      {
        id: "1134",
        name: "Undetected DMA - 35t Ultimate Bundle",
        price: "$224.99",
        image: "https://ducks-services.com/uploads/monthly_2025_11/35T-New.webp.b306425eb3ec84fef024af4756c0fa45.webp",
        url: DISCORD_LINK,
        options: [
          {
            label: "FW: NONE",
            price: "$224.99",
            stock: "IN STOCK (10M)"
          },
          {
            label: "FW: BE / COD / BF / FIVEM",
            price: "$274.99",
            stock: "IN STOCK (∞)"
          },
          {
            label: "FW: ACE / EAC / BE / COD",
            price: "$374.99",
            stock: "IN STOCK (∞)"
          }
        ]
      },
      {
        id: "1135",
        name: "Undetected DMA - 75t Ultimate Bundle",
        price: "$269.99",
        image: "https://ducks-services.com/uploads/monthly_2025_11/75T-New.webp.dc3b79b9c4535d530eb60b9383a8f1d3.webp",
        url: DISCORD_LINK,
        options: [
          {
            label: "FW: NONE",
            price: "$269.99",
            stock: "IN STOCK (10M)"
          },
          {
            label: "FW: BE / COD / BF / FIVEM",
            price: "$319.99",
            stock: "IN STOCK (∞)"
          },
          {
            label: "FW: ACE / EAC / BE / COD",
            price: "$419.99",
            stock: "IN STOCK (∞)"
          }
        ]
      },
      {
        id: "1509",
        name: "Undetected DMA - 100t Ultimate Bundle",
        price: "$319.99",
        image: "https://ducks-services.com/uploads/monthly_2025_11/100T-New.webp.38cc5d5862b3d7fd071bae66d8aeb0a1.webp",
        url: DISCORD_LINK,
        options: [
          {
            label: "FW: NONE",
            price: "$319.99",
            stock: "IN STOCK (10M)"
          },
          {
            label: "FW: BE / COD / BF / FIVEM",
            price: "$369.99",
            stock: "IN STOCK (∞)"
          },
          {
            label: "FW: ACE / EAC / BE / COD",
            price: "$469.99",
            stock: "IN STOCK (∞)"
          }
        ]
      },
      {
        id: "1543",
        name: "Undetected DMA - 100t Baller Bundle",
        price: "$629.99",
        image: "https://ducks-services.com/uploads/monthly_2025_12/100T-Baller-Bundle.webp.b280f3eb8bbbc0f2fdc4ebebff7d3406.webp",
        url: DISCORD_LINK,
        options: [
          {
            label: "FW: NONE",
            price: "$629.99",
            stock: "IN STOCK (10M)"
          },
          {
            label: "FW: EMULATED BE / COD / BF / FIVEM",
            price: "$679.99",
            stock: "IN STOCK (∞)"
          },
          {
            label: "FW: EMULATED ACE / EAC / BE / COD",
            price: "$779.99",
            stock: "IN STOCK (∞)"
          }
        ]
      }
    ]
  },
  {
    title: "DMA Cards",
    description: "DMA allows PCIe hardware to access system memory directly, bypassing the CPU. It's essential securely manipulating game memory.",
    products: [
      {
        id: "451",
        name: "Undetected DMA - 35t PCIe Card",
        price: "$99.99",
        image: "https://i.postimg.cc/zBJTR0NM/35t-webp-30b9a3774ac507352cce1c8243694a46-(1).webp",
        url: DISCORD_LINK
      },
      {
        id: "905",
        name: "Undetected DMA - 75t PCIe Card",
        price: "$149.99",
        image: "https://i.postimg.cc/qB3R022d/ez.png",
        url: DISCORD_LINK
      },
      {
        id: "1426",
        name: "Undetected DMA - 100t PCIe Card",
        price: "$199.99",
        image: "https://i.postimg.cc/qB3R022d/ez.png",
        url: DISCORD_LINK
      }
    ]
  },
  {
    title: "DMA Fuser",
    description: "An Fuser combines video signal from both PC's outputs via Display Port cables, and overlays 2 PC's with 1 screen at high refresh rates.",
    products: [
      {
        id: "707",
        name: "Undetected DMA - 1K HDMI Fuser",
        price: "$129.99",
        image: "https://i.postimg.cc/1Rw9bsZ8/Fuser-png-91030d660aef2f01e007ba95b08dcadc.png",
        url: DISCORD_LINK
      },
      {
        id: "1521",
        name: "Undetected DMA - DC500 Fuser (Pre-Order)",
        price: "$449.99",
        originalPrice: "$500.00",
        image: "https://ducks-services.com/uploads/monthly_2025_12/Screenshot2025-12-13at2_09_38PM.png.909851395f44a2e3d62f1d6d2cc33546.png",
        url: DISCORD_LINK
      }
    ]
  },
  {
    title: "DMA Aiming Devices",
    description: "A KM Box allows you to use aimbot safely—it acts as a mouse and emulates mouse inputs, making it one of the safest ways to cheat.",
    products: [
      {
        id: "588",
        name: "Undetected DMA - KMBox B + Pro",
        price: "$24.99",
        originalPrice: "$49.99",
        image: "https://ducks-services.com/uploads/monthly_2025_11/b.webp.b432a01da556e64f19997098752a4c8e.webp",
        url: DISCORD_LINK
      },
      {
        id: "1163",
        name: "Undetected DMA - MAKCU",
        price: "$39.99",
        image: "https://i.postimg.cc/qBXP8RTh/Makcu-webp-07c37c325bda180f0810fe07a0f17573.webp",
        url: DISCORD_LINK
      }
    ]
  },
  {
    title: "DMA Accessories",
    description: "Essential peripherals and components to complete your DMA setup, from high-speed data cables to dedicated secondary Mini PCs.",
    products: [
      {
        id: "790",
        name: "XIM Matrix",
        price: "$155.99",
        image: "https://ducks-services.com/uploads/monthly_2025_11/xim.png.c2a76e76050d4ff77e73a405452b65d7.webp.80b6c931db2a9f116e9c2aa5444b055d.webp",
        url: DISCORD_LINK
      },
      {
        id: "791",
        name: "PCI-e Extender Cable",
        price: "$13.99",
        image: "https://ducks-services.com/uploads/monthly_2025_11/PCIEEXTERNDER.png.14b989af9d2751548d358788bfefa61f.webp.8ab8b02d14ecc1632d95f277c7b9ec94.webp",
        url: DISCORD_LINK
      },
      {
        id: "792",
        name: "Budget Mini PC",
        price: "$159.00",
        image: "https://ducks-services.com/uploads/monthly_2025_11/budgetmiunicp.png.101fdc0f8ae316078ca1141a781b691c.webp.93aa15ee846f0b120f55b03c92334db7.webp",
        url: DISCORD_LINK
      },
      {
        id: "793",
        name: "Premium Mini PC",
        price: "$309.00",
        image: "https://ducks-services.com/uploads/monthly_2025_11/premiumminipc.png.a33e34e452ea2561b4b343dcf35d7d4f.webp.7bfe8f529c0b8359a338b5cbba0e6a67.webp",
        url: DISCORD_LINK
      },
      {
        id: "794",
        name: "High Speed USB-C to USB-A",
        price: "$9.99",
        image: "https://ducks-services.com/uploads/monthly_2025_11/usb.png.0806048a29ce98c7113ab13f9a5ce265.webp.289e507a4a944cb7bd92f63b72ea8f35.webp",
        url: DISCORD_LINK
      },
      {
        id: "795",
        name: "DisplayPort to HDMI",
        price: "$18.99",
        image: "https://ducks-services.com/uploads/monthly_2025_11/dp.png.cfdf1e2fe09a8201c95cf2b421f51e53.webp.c23a4ff1ca6e39721508ae5ca5dcd9cf.webp",
        url: DISCORD_LINK
      },
      {
        id: "1203",
        name: "Undetected DMA - HPTT",
        price: "$4,499.99",
        image: "https://ducks-services.com/uploads/monthly_2025_11/hptt.png.501128919a2b2bef399ca9cbdbeb2b09.webp.16e68dd0b4fddd321acbc98b77aad94a.webp",
        url: DISCORD_LINK
      },
      {
        id: "1396",
        name: "DMA Installation Service",
        price: "$19.99",
        image: "https://ducks-services.com/uploads/monthly_2025_09/Installation-Service-DMA2.webp.2314ef38ec3703615d2935f8492312fc.webp",
        url: DISCORD_LINK
      }
    ]
  }
];