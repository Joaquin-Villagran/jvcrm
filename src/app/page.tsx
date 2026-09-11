"use client";

import Image from "next/image";
import { useState } from "react";
import {
    Activity,
    ArrowUpRight,
    Bell,
    Boxes,
    BriefcaseBusiness,
    Calculator as CalculatorIcon,
    ChevronDown,
    ChevronRight,
    CircleDollarSign,
    ClipboardList,
    Copy,
    CalendarDays,
    CheckCircle2,
    ContactRound,
    Grid2X2,
    LayoutDashboard,
    Menu,
    Phone,
    Plus,
    Search,
    Share2,
    Settings2,
    ShoppingBag,
    Sparkles,
    Store,
    UserPlus,
    Users,
    X,
} from "lucide-react";

type Role = "admin" | "distributor" | "seller";
type View =
    | "dashboard"
    | "catalog"
    | "calculator"
    | "crm"
    | "clients"
    | "network"
    | "sales"
    | "activity"
    | "referrals"
    | "invite";

const roleData = {
    admin: {
        label: "Administrador",
        name: "Sofi­a Benitez",
        initials: "SB",
        subtitle: "Resumen de toda la operación comercial",
    },
    distributor: {
        label: "Distribuidor",
        name: "Clover Group",
        organizationName: "Temps",
        initials: "CG",
        subtitle: "Tu organización en movimiento",
    },
    seller: {
        label: "Vendedor",
        name: "Juan Álvarez",
        initials: "JA",
        subtitle: "Tu actividad comercial de hoy",
    },
};
const products = [
    {
        id: 1,
        detalle: "15 piezas",
        codigo: "CO4654",
        categoria: "juegos",
        precio_lista: 7190000,
        img_URL:
            "https://images.seeklogo.com/logo-png/25/1/royal-prestige-logo-png_seeklogo-251911.png",
    },
    {
        id: 2,
        detalle: "10 piezas",
        codigo: "CO4644",
        categoria: "juegos",
        precio_lista: 5200000,
        img_URL: "/products/CO4644.png",
    },
    {
        id: 3,
        detalle: "8 piezas",
        codigo: "CO4634",
        categoria: "juegos",
        precio_lista: 4200000,
        img_URL: "/products/CO4634.png",
    },
    {
        id: 4,
        detalle: "7 piezas",
        codigo: "CO4624",
        categoria: "juegos",
        precio_lista: 3150000,
        img_URL: "/products/CO4624.png",
    },
    {
        id: 5,
        detalle: "5 piezas complementario",
        codigo: "CO4614",
        categoria: "juegos",
        precio_lista: 2600000,
        img_URL: "/products/CO4614.png",
    },
    {
        id: 6,
        detalle: "5 piezas esencial",
        codigo: "CO4604",
        categoria: "juegos",
        precio_lista: 2350000,
        img_URL: "/products/CO4604.png",
    },
    {
        id: 7,
        detalle: "Olla 30lts con tapa",
        codigo: "CO9680",
        categoria: "ollas individuales",
        precio_lista: 2090000,
        img_URL: "/products/CO9680.png",
    },
    {
        id: 8,
        detalle: "Olla 20lts con tapa",
        codigo: "CO9675",
        categoria: "ollas individuales",
        precio_lista: 1940000,
        img_URL: "/products/CO9675.png",
    },
    {
        id: 9,
        detalle: "Olla 12lts con tapa",
        codigo: "CO9660",
        categoria: "ollas individuales",
        precio_lista: 1590000,
        img_URL: "/products/CO9660.png",
    },
    {
        id: 10,
        detalle: "Olla 8lts con tapa",
        codigo: "CO4725",
        categoria: "ollas individuales",
        precio_lista: 1370000,
        img_URL: "/products/CO4725.png",
    },
    {
        id: 11,
        detalle: "Olla 6lts con tapa",
        codigo: "CO4720",
        categoria: "ollas individuales",
        precio_lista: 1300000,
        img_URL: "/products/CO4720.png",
    },
    {
        id: 12,
        detalle: "Olla 4lts con tapa",
        codigo: "CO4715",
        categoria: "ollas individuales",
        precio_lista: 1000000,
        img_URL: "/products/CO4715.png",
    },
    {
        id: 13,
        detalle: "Olla 3lts con tapa",
        codigo: "CO4710",
        categoria: "ollas individuales",
        precio_lista: 930000,
        img_URL: "/products/CO4710.png",
    },
    {
        id: 14,
        detalle: "Olla 2lts con tapa",
        codigo: "CO4705",
        categoria: "ollas individuales",
        precio_lista: 850000,
        img_URL: "/products/CO4705.png",
    },
    {
        id: 15,
        detalle: "Olla 1.5 Qts con tapa",
        codigo: "CO4700",
        categoria: "ollas individuales",
        precio_lista: 780000,
        img_URL: "/products/CO4700.png",
    },
    {
        id: 16,
        detalle: "Olla de presión 6lts con reloj",
        codigo: "CO1253",
        categoria: "ollas individuales",
        precio_lista: 1730000,
        img_URL: "/products/CO1253.png",
    },
    {
        id: 17,
        detalle: "Olla de presión 10lts con reloj",
        codigo: "CO1258",
        categoria: "ollas individuales",
        precio_lista: 2000000,
        img_URL: "/products/CO1258.png",
    },
    {
        id: 18,
        detalle: "Pavera Ovalada",
        codigo: "CO6589",
        categoria: "ollas individuales",
        precio_lista: 1700000,
        img_URL: "/products/CO6589.png",
    },
    {
        id: 19,
        detalle: "Paellera 14″",
        codigo: "CO4840",
        categoria: "ollas individuales",
        precio_lista: 1450000,
        img_URL: "/products/CO4840.png",
    },
    {
        id: 20,
        detalle: "Paellera 10″",
        codigo: "CO4780",
        categoria: "ollas individuales",
        precio_lista: 990000,
        img_URL: "/products/CO4780.png",
    },
    {
        id: 21,
        detalle: "Sartén 26cm c/tapa",
        codigo: "CO4735",
        categoria: "sartenes",
        precio_lista: 1200000,
        img_URL: "/products/CO4735.png",
    },
    {
        id: 22,
        detalle: "Sartén 20cm c/tapa",
        codigo: "CO4730",
        categoria: "sartenes",
        precio_lista: 920000,
        img_URL: "/products/CO4730.png",
    },
    {
        id: 23,
        detalle: "Juego Sartenes Gourmet 4pza",
        codigo: "CO4650",
        categoria: "sartenes",
        precio_lista: 1670000,
        img_URL: "/products/CO4650.png",
    },
    {
        id: 24,
        detalle: "Sartén Gourmet 10″c/tapa",
        codigo: "CO4750",
        categoria: "sartenes",
        precio_lista: 950000,
        img_URL: "/products/CO4750.png",
    },
    {
        id: 25,
        detalle: "Sartén Gourmet 8″c/tapa",
        codigo: "CO4745",
        categoria: "sartenes",
        precio_lista: 820000,
        img_URL: "/products/CO4745.png",
    },
    {
        id: 26,
        detalle: "Juego Easy Release 6pzas",
        codigo: "CO9740",
        categoria: "sartenes",
        precio_lista: 3490000,
        img_URL: "/products/CO9740.png",
    },
    {
        id: 27,
        detalle: "Easy Release 12″",
        codigo: "CO9739",
        categoria: "sartenes",
        precio_lista: 1740000,
        img_URL: "/products/CO9739.png",
    },
    {
        id: 28,
        detalle: "Easy Release 10″",
        codigo: "CO9738",
        categoria: "sartenes",
        precio_lista: 1400000,
        img_URL: "/products/CO9738.png",
    },
    {
        id: 29,
        detalle: "Easy Release 8″",
        codigo: "CO9736",
        categoria: "sartenes",
        precio_lista: 1160000,
        img_URL: "/products/CO9736.png",
    },
    {
        id: 30,
        detalle: "Maxtractor",
        codigo: "JU0053",
        categoria: "Maxtractor",
        precio_lista: 3100000,
        img_URL: "/products/JU0053.png",
    },
    {
        id: 31,
        detalle: "Tapa Pequeña 16cm",
        codigo: "CO4800",
        categoria: "tapasColadores",
        precio_lista: 240000,
        img_URL: "/products/CO4800.png",
    },
    {
        id: 32,
        detalle: "Tapa Mediana 20cm",
        codigo: "CO4801",
        categoria: "tapasColadores",
        precio_lista: 280000,
        img_URL: "/products/CO4801.png",
    },
    {
        id: 33,
        detalle: "Tapa Grande 26cm",
        codigo: "CO4802",
        categoria: "tapasColadores",
        precio_lista: 370000,
        img_URL: "/products/CO4802.png",
    },
    {
        id: 34,
        detalle: "Tapa Alta 26cm",
        codigo: "CO4803",
        categoria: "tapasColadores",
        precio_lista: 850000,
        img_URL: "/products/CO4803.png",
    },
    {
        id: 35,
        detalle: "Colador Pequeño 20cm",
        codigo: "CO4807",
        categoria: "tapasColadores",
        precio_lista: 610000,
        img_URL: "/products/CO4807.png",
    },
    {
        id: 36,
        detalle: "Colador Grande 26cm",
        codigo: "CO4808",
        categoria: "tapasColadores",
        precio_lista: 780000,
        img_URL: "/products/CO4808.png",
    },
    {
        id: 37,
        detalle: "Plancha Doble RP 45.5x25.5cm",
        codigo: "CO9685",
        categoria: "planchas",
        precio_lista: 1000000,
        img_URL: "/products/CO9685.png",
    },
    {
        id: 38,
        detalle: "Parrilla Redonda RP 30cm",
        codigo: "CO9686",
        categoria: "planchas",
        precio_lista: 860000,
        img_URL: "/products/CO9686.png",
    },
    {
        id: 39,
        detalle: "Plancha Sencilla RP 28cm",
        codigo: "CO9687",
        categoria: "planchas",
        precio_lista: 760000,
        img_URL: "/products/CO9687.png",
    },
    {
        id: 40,
        detalle: "Destapador Precision",
        codigo: "SP1850",
        categoria: "utensilios",
        precio_lista: 84000,
        img_URL: "/products/SP1850.png",
    },
    {
        id: 41,
        detalle: "Rallador Precision",
        codigo: "SP1851",
        categoria: "utensilios",
        precio_lista: 87000,
        img_URL: "/products/SP1851.png",
    },
    {
        id: 42,
        detalle: "Batidor de Globo Precision",
        codigo: "SP1853",
        categoria: "utensilios",
        precio_lista: 104000,
        img_URL: "/products/SP1853.png",
    },
    {
        id: 43,
        detalle: "Cortapizza Precision",
        codigo: "SP1856",
        categoria: "utensilios",
        precio_lista: 97000,
        img_URL: "/products/SP1856.png",
    },
    {
        id: 44,
        detalle: "Pelador Vertical",
        codigo: "SP1860",
        categoria: "utensilios",
        precio_lista: 84000,
        img_URL: "/products/SP1860.png",
    },
    {
        id: 45,
        detalle: "Base Magnética",
        codigo: "SP0305",
        categoria: "utensilios",
        precio_lista: 89000,
        img_URL: "/products/SP0305.png",
    },
    {
        id: 46,
        detalle: "Espátula Precision",
        codigo: "SP1852",
        categoria: "utensilios",
        precio_lista: 97000,
        img_URL: "/products/SP1852.png",
    },
    {
        id: 47,
        detalle: "Juego Deluxe 3pza",
        codigo: "SP0081",
        categoria: "utensilios",
        precio_lista: 74000,
        img_URL: "/products/SP0081.png",
    },
    {
        id: 48,
        detalle: "Juego Servir Complementario",
        codigo: "SP0091",
        categoria: "utensilios",
        precio_lista: 70000,
        img_URL: "/products/SP0091.png",
    },
    {
        id: 49,
        detalle: "Cubiertos Americana 24pza",
        codigo: "PR0509",
        categoria: "utensilios",
        precio_lista: 265000,
        img_URL: "/products/PR0509.png",
    },
    {
        id: 50,
        detalle: "Smart Temp",
        codigo: "SP2551",
        categoria: "utensilios",
        precio_lista: 63000,
        img_URL: "/products/SP2551.png",
    },
    {
        id: 51,
        detalle: "Chocolatera RP",
        codigo: "CO0101",
        categoria: "miscelaneos",
        precio_lista: 790000,
        img_URL: "/products/CO0101.png",
    },
    {
        id: 52,
        detalle: "Expertea",
        codigo: "CO0902",
        categoria: "miscelaneos",
        precio_lista: 1220000,
        img_URL: "/products/CO0902.png",
    },
    {
        id: 53,
        detalle: "Hervidor 1 Cuarto",
        codigo: "PR2685",
        categoria: "miscelaneos",
        precio_lista: 300000,
        img_URL: "/products/PR2685.png",
    },
    {
        id: 54,
        detalle: "Hervidor 1/2 Cuarto",
        codigo: "PR2675",
        categoria: "miscelaneos",
        precio_lista: 250000,
        img_URL: "/products/PR2675.png",
    },
    {
        id: 55,
        detalle: "Tazones x4",
        codigo: "PR1044",
        categoria: "miscelaneos",
        precio_lista: 420000,
        img_URL: "/products/PR1044.png",
    },
    {
        id: 56,
        detalle: "Tazones x2",
        codigo: "SP0362",
        categoria: "miscelaneos",
        precio_lista: 190000,
        img_URL: "/products/SP0362.png",
    },
    {
        id: 57,
        detalle: "Coladores Maxtractor",
        codigo: "PR1452",
        categoria: "Maxtractor",
        precio_lista: 490000,
        img_URL: "/products/PR1452.png",
    },
    {
        id: 58,
        detalle: "Cafetera Expresso 10 tazas",
        codigo: "PR2129",
        categoria: "cafe",
        precio_lista: 565000,
        img_URL: "/products/PR2129.png",
    },
    {
        id: 59,
        detalle: "Cafetera Expresso 4 tazas",
        codigo: "PR2128",
        categoria: "cafe",
        precio_lista: 350000,
        img_URL: "/products/PR2128.png",
    },
    {
        id: 60,
        detalle: "Cacerola para Huevos",
        codigo: "PR2124",
        categoria: "cafe",
        precio_lista: 930000,
        img_URL: "/products/PR2124.png",
    },
    {
        id: 61,
        detalle: "RP All-in-One Bloque Completo",
        codigo: "CU0831",
        categoria: "cuchilleria",
        precio_lista: 2420000,
        img_URL: "/products/CU0831.png",
    },
    {
        id: 62,
        detalle: "Juego cuchillo carne 4pza",
        codigo: "CU0820",
        categoria: "cuchilleria",
        precio_lista: 390000,
        img_URL: "/products/CU0820.png",
    },
    {
        id: 63,
        detalle: "Juego cuchillos 5pza",
        codigo: "CU0800",
        categoria: "cuchilleria",
        precio_lista: 890000,
        img_URL: "/products/CU0800.png",
    },
    {
        id: 64,
        detalle: "Juego cuchillos rebanar 4pza",
        codigo: "CU0815",
        categoria: "cuchilleria",
        precio_lista: 610000,
        img_URL: "/products/CU0815.png",
    },
    {
        id: 65,
        detalle: "Juego cuchillos churrasco 4pza",
        codigo: "CU0740",
        categoria: "cuchilleria",
        precio_lista: 385000,
        img_URL: "/products/CU0740.png",
    },
    {
        id: 66,
        detalle: "Cuchillo Santoku 5″",
        codigo: "SP0296",
        categoria: "cuchilleria",
        precio_lista: 110000,
        img_URL: "/products/SP0296.png",
    },
    {
        id: 67,
        detalle: "Hacha RP",
        codigo: "CU0825",
        categoria: "cuchilleria",
        precio_lista: 325000,
        img_URL: "/products/CU0825.png",
    },
    {
        id: 68,
        detalle: "Cuchillo Multiuso 5″",
        codigo: "CU0814",
        categoria: "cuchilleria",
        precio_lista: 315000,
        img_URL: "/products/CU0814.png",
    },
    {
        id: 69,
        detalle: "Cuchillo Pelar 2.75″",
        codigo: "CU0810",
        categoria: "cuchilleria",
        precio_lista: 270000,
        img_URL: "/products/CU0810.png",
    },
    {
        id: 70,
        detalle: "Tabla Bambu Grande",
        codigo: "PR0008",
        categoria: "cuchilleria",
        precio_lista: 160000,
        img_URL: "/products/PR0008.png",
    },
    {
        id: 71,
        detalle: "Tabla Bambu Pequeña",
        codigo: "PR0021",
        categoria: "cuchilleria",
        precio_lista: 125000,
        img_URL: "/products/PR0021.png",
    },
    {
        id: 72,
        detalle: "Afilador cuchillos RP INOX",
        codigo: "PR1841",
        categoria: "cuchilleria",
        precio_lista: 350000,
        img_URL: "/products/PR1841.png",
    },
    {
        id: 73,
        detalle: "Royal Barista",
        codigo: "CO2106",
        categoria: "cafe",
        precio_lista: 1470000,
        img_URL: "/products/CO2106.png",
    },
    {
        id: 74,
        detalle: "Kit Completo Barista",
        codigo: "PR2134",
        categoria: "cafe",
        precio_lista: 430000,
        img_URL: "/products/PR2134.png",
    },
    {
        id: 75,
        detalle: "Juego 4 tazas doble pared",
        codigo: "SP0135",
        categoria: "cafe",
        precio_lista: 175000,
        img_URL: "/products/SP0135.png",
    },
    {
        id: 76,
        detalle: "Juego 2 tazas doble pared",
        codigo: "SP0136",
        categoria: "cafe",
        precio_lista: 120000,
        img_URL: "/products/SP0136.png",
    },
    {
        id: 77,
        detalle: "Juego 2 copas helado",
        codigo: "SP0252",
        categoria: "cafe",
        precio_lista: 129000,
        img_URL: "/products/SP0252.png",
    },
    {
        id: 78,
        detalle: "Juego 2 Azucareros",
        codigo: "SP0261",
        categoria: "cafe",
        precio_lista: 99000,
        img_URL: "/products/SP0261.png",
    },
    {
        id: 79,
        detalle: "Tapa Olla a Presión UPGRADE",
        codigo: "PR6100",
        categoria: "ollas individuales",
        precio_lista: 650000,
        img_URL: "/products/PR6100.png",
    },
    {
        id: 80,
        detalle: "Juego Tazones P/ Mezclar Completo",
        codigo: "CO4900",
        categoria: "miscelaneos",
        precio_lista: 995000,
        img_URL: "/products/CO4900.png",
    },
    {
        id: 81,
        detalle: "Tazones P/ Mezclar 4 piezas (2.8L)",
        codigo: "RP4904",
        categoria: "miscelaneos",
        precio_lista: 580000,
        img_URL: "/products/RP4904.png",
    },
    {
        id: 82,
        detalle: "Set de 3 Tazones",
        codigo: "PR4902",
        categoria: "miscelaneos",
        precio_lista: 360000,
        img_URL: "/products/PR4902.png",
    },
    {
        id: 83,
        detalle: "Licuadora Power Go + accesorios",
        codigo: "PE0028",
        categoria: "PowerBlender",
        precio_lista: 1700000,
        img_URL: "/products/PE0028.png",
    },
    {
        id: 84,
        detalle: "Licuadora Power Go",
        codigo: "ES1019",
        categoria: "PowerBlender",
        precio_lista: 1300000,
        img_URL: "/products/ES1019.png",
    },
    {
        id: 85,
        detalle: "Machacador línea Precision",
        codigo: "SP1857",
        categoria: "utensilios",
        precio_lista: 104000,
        img_URL: "/products/SP1857.png",
    },
];
const navByRole: Record<
    Role,
    { label: string; icon: typeof LayoutDashboard; view: View; href?: string }[]
> = {
    admin: [
        { label: "Panel general", icon: LayoutDashboard, view: "dashboard" },
        { label: "Distribuidores", icon: Store, view: "network" },
        { label: "Usuarios", icon: Users, view: "crm" },
        { label: "Productos", icon: Boxes, view: "catalog" },
        { label: "Calculadora", icon: CalculatorIcon, view: "calculator" },
        { label: "Ventas", icon: CircleDollarSign, view: "sales" },
    ],
    distributor: [
        { label: "Inicio", icon: LayoutDashboard, view: "dashboard" },
        { label: "Mi Red", icon: Users, view: "network" },
        { label: "Catálogo", icon: ShoppingBag, view: "catalog" },
        { label: "Calculadora", icon: CalculatorIcon, view: "calculator" },
        { label: "Clientes", icon: ContactRound, view: "clients" },
        { label: "Gestión", icon: CalendarDays, view: "activity", href: "/gestion" },
        { label: "Referidos", icon: UserPlus, view: "referrals", href: "/referidos" },
        { label: "Nuevo Recluta", icon: UserPlus, view: "invite" },
        { label: "Ventas", icon: CircleDollarSign, view: "sales" },
    ],
    seller: [
        { label: "Inicio", icon: LayoutDashboard, view: "dashboard" },
        { label: "Catálogo", icon: ShoppingBag, view: "catalog" },
        { label: "Calculadora", icon: CalculatorIcon, view: "calculator" },
        { label: "Clientes", icon: Users, view: "clients" },
        { label: "Gestión", icon: CalendarDays, view: "activity", href: "/gestion" },
        { label: "Referidos", icon: UserPlus, view: "referrals", href: "/referidos" },
        { label: "Nuevo Recluta", icon: UserPlus, view: "invite" },
        { label: "Ventas", icon: CircleDollarSign, view: "sales" },
    ],
};

function Badge({
    children,
    tone = "blue",
}: {
    children: React.ReactNode;
    tone?: "blue" | "green" | "amber" | "gray";
}) {
    return <span className={`badge badge-${tone}`}>{children}</span>;
}
function Kpi({
    label,
    value,
    change,
    icon: Icon,
    tone = "blue",
}: {
    label: string;
    value: string;
    change?: string;
    icon: typeof Users;
    tone?: string;
}) {
    return (
        <div className="kpi-card">
            <div className={`kpi-icon kpi-${tone}`}>
                <Icon size={18} />
            </div>
            <div className="kpi-copy">
                <span>{label}</span>
                <strong>{value}</strong>
                {change && (
                    <small>
                        <ArrowUpRight size={13} /> {change}
                    </small>
                )}
            </div>
        </div>
    );
}
function ChartBars() {
    return (
        <div className="chart-bars">
            <div className="chart-y">
                <span>120</span>
                <span>80</span>
                <span>40</span>
                <span>0</span>
            </div>
            <div className="bars">
                {[44, 61, 52, 78, 66, 91, 72].map((height, i) => (
                    <div className="bar-group" key={i}>
                        <div className="bar-track">
                            <i style={{ height: `${height}%` }} />
                            <b style={{ height: `${Math.max(12, height - 22)}%` }} />
                        </div>
                        <small>
                            {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"][i]}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
}
function Dashboard({
    role,
    period,
    setPeriod,
}: {
    role: Role;
    period: "Hoy" | "Semana" | "Mes" | "Año";
    setPeriod: (p: "Hoy" | "Semana" | "Mes" | "Año") => void;
}) {
    const isAdmin = role === "admin";
    const isSeller = role === "seller";

    // Vendedores directos según el rol
    const directSellers = isSeller
        ? [
            {
                name: "Rocío Castro",
                id: "VILJ9012",
                demos: 18,
                sales: 8,
                conversion: "44,4%",
            },
            {
                name: "nuevo vendedor",
                id: "VILJ9013",
                demos: 12,
                sales: 5,
                conversion: "41,7%",
            },
        ]
        : [];

    // Filtrar ventas recientes según el rol
    const filteredPanelSales = isSeller
        ? panelSales.filter(
            (sale) =>
                sale.seller === "Rocío Castro" || sale.seller === "Nuevo vendedor",
        )
        : panelSales;

    const organizationValues =
        period === "Hoy"
            ? [
                ["Total de personas", "86", "", Users, "blue"],
                ["Distribuidores", "8", "", Store, "violet"],
                ["Vendedores", "78", "", BriefcaseBusiness, "amber"],
                ["Ventas", "12", "+3 hoy", CircleDollarSign, "green"],
            ]
            : period === "Semana"
                ? [
                    ["Total de personas", "86", "", Users, "blue"],
                    ["Distribuidores", "8", "", Store, "violet"],
                    ["Vendedores", "78", "+4 esta semana", BriefcaseBusiness, "amber"],
                    ["Ventas", "64", "+14,2%", CircleDollarSign, "green"],
                ]
                : [
                    ["Total de personas", "86", "+6 este mes", Users, "blue"],
                    ["Distribuidores", "8", "", Store, "violet"],
                    ["Vendedores", "78", "+12 este mes", BriefcaseBusiness, "amber"],
                    ["Ventas", "216", "+14,2%", CircleDollarSign, "green"],
                ];
    const values = isAdmin
        ? [
            ["Distribuciones", "24", "+8.2%", Store, "blue"],
            ["Vendedores", "186", "+12.5%", Users, "violet"],
            ["Demostraciones", "1.248", "+18.4%", ClipboardList, "amber"],
            ["Ventas", "486", "+9.7%", CircleDollarSign, "green"],
            ["Tasa de cierre", "38,9%", "+4.2%", Activity, "blue"],
        ]
        : isSeller
            ? [
                ["Demostraciones", "24", "+12%", ClipboardList, "amber"],
                ["Ventas", "9", "+18%", CircleDollarSign, "green"],
                ["No ventas", "11", "", X, "gray"],
                ["Tasa de cierre", "37,5%", "+4%", Activity, "blue"],
            ]
            : organizationValues;
    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">
                        {isAdmin
                            ? "VISIÓN GLOBAL"
                            : isSeller
                                ? "MI JORNADA"
                                : "MI ORGANIZACIÓN"}
                    </p>
                    <h1>
                        {isAdmin
                            ? "Panel general"
                            : `Hola, ${roleData[role].name.split(" ")[0]}`}
                    </h1>
                    <p>{roleData[role].subtitle}</p>
                </div>
                <div className="heading-actions">
                    <div className="periods">
                        <button
                            className={period === "Mes" ? "active" : ""}
                            onClick={() => setPeriod("Mes")}
                        >
                            Mes
                        </button>
                        <button
                            className={period === "Semana" ? "active" : ""}
                            onClick={() => setPeriod("Semana")}
                        >
                            Semana
                        </button>
                        <button
                            className={period === "Hoy" ? "active" : ""}
                            onClick={() => setPeriod("Hoy")}
                        >
                            Hoy
                        </button>
                    </div>
                    <button className="outline-button">
                        <ChevronDown size={15} />{" "}
                        {isAdmin
                            ? "Todos los distribuidores"
                            : period === "Hoy"
                                ? "Hoy"
                                : period === "Semana"
                                    ? "Esta semana"
                                    : "Septiembre 2026"}
                    </button>
                </div>
            </div>
            {role === "distributor" && (
                <div className="section-label">
                    <span>Mi actividad</span>
                    <span>Lo que hiciste personalmente</span>
                </div>
            )}
            {role === "seller" && directSellers.length > 0 && (
                <div className="section-label">
                    <span>Mis vendedores directos</span>
                    <span>Tu equipo de ventas</span>
                </div>
            )}
            {role === "seller" && directSellers.length > 0 && (
                <div className="ranking">
                    {directSellers.map((seller, i) => (
                        <div className="rank-row" key={seller.id}>
                            <span className="avatar">
                                {seller.name.slice(0, 2).toUpperCase()}
                            </span>
                            <span className="rank-name">
                                <b>{seller.name}</b>
                                <small>{seller.id}</small>
                            </span>
                            <span>{seller.demos} demos</span>
                            <span>{seller.sales} ventas</span>
                            <strong className="success-text">{seller.conversion}</strong>
                            <ChevronRight size={16} />
                        </div>
                    ))}
                </div>
            )}
            <div className="kpi-grid">
                {values.map(([label, value, change, Icon, tone]) => (
                    <Kpi
                        key={String(label)}
                        label={String(label)}
                        value={String(value)}
                        change={String(change)}
                        icon={Icon as typeof Users}
                        tone={String(tone)}
                    />
                ))}
            </div>
            {role === "distributor" && (
                <div className="section-label">
                    <span>Mi organización · {roleData.distributor.organizationName}</span>
                    <span>El pulso de toda tu red</span>
                </div>
            )}
            <div className="dashboard-grid">
                <section className="panel chart-panel">
                    <div className="panel-head">
                        <div>
                            <h2>{isAdmin ? "Demostraciones" : "Actividad comercial"}</h2>
                            <p>
                                {isAdmin
                                    ? "Evolución de los últimos 7 días"
                                    : "Comparativa del período actual"}
                            </p>
                        </div>
                        <button className="icon-button">
                            <Grid2X2 size={17} />
                        </button>
                    </div>
                    <ChartBars />
                    <div className="legend">
                        <span>
                            <i className="legend-dot blue" /> Concretadas <b>842</b>
                        </span>
                        <span>
                            <i className="legend-dot pale" /> Agendadas <b>1.248</b>
                        </span>
                    </div>
                </section>
                <section className="panel result-panel">
                    <div className="panel-head">
                        <div>
                            <h2>
                                {isAdmin
                                    ? "Resultado de demostraciones"
                                    : "Próximas actividades"}
                            </h2>
                            <p>
                                {isAdmin
                                    ? "Distribución por resultado"
                                    : isSeller
                                        ? "Agenda de tus vendedores"
                                        : "Tu agenda para hoy"}
                            </p>
                        </div>
                        <button className="text-button">
                            Ver todo <ChevronRight size={15} />
                        </button>
                    </div>
                    {isAdmin ? (
                        <div className="donut-wrap">
                            <div className="donut">
                                <strong>67%</strong>
                                <span>conversión</span>
                            </div>
                            <div className="result-list">
                                <p>
                                    <i className="dot green" /> Venta <b>842</b>
                                </p>
                                <p>
                                    <i className="dot gray" /> No venta <b>406</b>
                                </p>
                                <p>
                                    <i className="dot amber" /> Canceladas <b>84</b>
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="agenda">
                            {(isSeller
                                ? [
                                    [
                                        "10:00",
                                        "Demostración",
                                        "Rocío Castro · Cliente nuevo",
                                        "Pendiente",
                                        "amber",
                                    ],
                                    [
                                        "13:30",
                                        "Demostración",
                                        "Rocío Castro · Demostración",
                                        "Confirmada",
                                        "green",
                                    ],
                                    [
                                        "16:00",
                                        "Postventa",
                                        "Nuevo vendedor · Seguimiento",
                                        "Agendada",
                                        "blue",
                                    ],
                                ]
                                : [
                                    [
                                        "10:30",
                                        "Demostración",
                                        "María González · 2 productos",
                                        "Pendiente",
                                        "amber",
                                    ],
                                    [
                                        "14:00",
                                        "Postventa",
                                        "Laura Fernández · Set de cocina",
                                        "Confirmada",
                                        "green",
                                    ],
                                    [
                                        "17:30",
                                        "Demostración",
                                        "Ricardo Molina · Referido",
                                        "Agendada",
                                        "blue",
                                    ],
                                ]
                            ).map((item) => (
                                <div key={item[0]}>
                                    <span className="time">{item[0]}</span>
                                    <span>
                                        <b>{item[1]}</b>
                                        <small>{item[2]}</small>
                                    </span>
                                    <Badge tone={item[4] as "amber" | "green" | "blue"}>
                                        {item[3]}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
            <div className="dashboard-grid lower">
                <section className="panel">
                    <div className="panel-head">
                        <div>
                            <h2>
                                {isAdmin
                                    ? "Top distribuidores"
                                    : isSeller
                                        ? "Mis vendedores directos"
                                        : "Actividad de mi red"}
                            </h2>
                            <p>
                                {isAdmin
                                    ? "Rendimiento por organización"
                                    : isSeller
                                        ? "Rendimiento de tu equipo"
                                        : "Últimas ventas de tu organización"}
                            </p>
                        </div>
                        <button className="text-button">
                            Ver ranking <ChevronRight size={15} />
                        </button>
                    </div>
                    <div className="ranking">
                        {(isSeller
                            ? directSellers
                            : [
                                ["01", "Clover Group", "78328", "126 ventas", "42,1%"],
                                ["02", "Grupo Norte", "79421", "98 ventas", "39,8%"],
                                ["03", "Team Premium", "81231", "84 ventas", "36,4%"],
                            ]
                        ).map((item, i) => (
                            <div
                                className="rank-row"
                                key={isSeller ? (item as any).id : (item as any)[0]}
                            >
                                <span className={`rank-number ${i === 0 ? "first" : ""}`}>
                                    {isSeller ? "" : (item as any)[0]}
                                </span>
                                <span className="avatar">
                                    {isSeller
                                        ? (item as any).name.slice(0, 2).toUpperCase()
                                        : ((item as any)[1] as string).slice(0, 2)}
                                </span>
                                <span className="rank-name">
                                    <b>{isSeller ? (item as any).name : (item as any)[1]}</b>
                                    <small>
                                        {isSeller ? (item as any).id : (item as any)[2]}
                                    </small>
                                </span>
                                <span>
                                    {isSeller ? (item as any).demos + " demos" : (item as any)[3]}
                                </span>
                                <strong className="success-text">
                                    {isSeller ? (item as any).conversion : (item as any)[4]}
                                </strong>
                                <ChevronRight size={16} />
                            </div>
                        ))}
                    </div>
                </section>
                <section className="panel sales-feed">
                    <div className="panel-head">
                        <div>
                            <h2>Ventas recientes</h2>
                            <p>Actividad en tiempo real</p>
                        </div>
                        <span className="live">
                            <i /> En vivo
                        </span>
                    </div>
                    {filteredPanelSales.map((sale) => (
                        <div className="feed-item" key={sale.code}>
                            <span className="feed-icon">
                                <ShoppingBag size={14} />
                            </span>
                            <span>
                                <b>{sale.seller}</b>
                                <small>
                                    {sale.code} · {sale.product.codigo} · {sale.product.detalle} ·{" "}
                                    {formatARS(sale.product.precio_lista)}
                                </small>
                            </span>
                            <time>{sale.time}</time>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}
type CartItem = { product: (typeof products)[number]; quantity: number };

const categoryColors: Record<string, string> = {
    Todos: "#0066B3",
    juegos: "#0066B3",
    "ollas individuales": "#D97706",
    sartenes: "#C2410C",
    tapasColadores: "#0F766E",
    planchas: "#475569",
    utensilios: "#7C3AED",
    miscelaneos: "#64748B",
    cafe: "#92400E",
    cuchilleria: "#BE123C",
    Licuadoras: "#15803D",
};
const panelSales = [
    {
        seller: "Rocío Castro",
        code: "VILJ0583",
        product: products[0],
        time: "Hace 2 min",
    },
    {
        seller: "Juan Álvarez",
        code: "VILJ0584",
        product: products[3],
        time: "Hace 4 min",
    },
    {
        seller: "Nuevo vendedor",
        code: "VILJ8888",
        product: products[6],
        time: "Hace 8 min",
    },
    {
        seller: "Rocío Castro",
        code: "VILJ0585",
        product: products[2],
        time: "Hace 10 min",
    },
    {
        seller: "María López",
        code: "VILJ0421",
        product: products[20],
        time: "Hace 16 min",
    },
    {
        seller: "Martín Díaz",
        code: "VILJ0422",
        product: products[14],
        time: "Hace 22 min",
    },
];

function FilteredCatalog({
    cartCount,
    onAdd,
    onOpenCalculator,
    period,
    setPeriod,
}: {
    cartCount: number;
    onAdd: (product: (typeof products)[number]) => void;
    onOpenCalculator: () => void;
    period: "Hoy" | "Semana" | "Mes" | "Año";
    setPeriod: (p: "Hoy" | "Semana" | "Mes" | "Año") => void;
}) {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [searchTerm, setSearchTerm] = useState("");
    const categories = [
        "Todos",
        ...Array.from(new Set(products.map((product) => product.categoria))),
    ];
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase("es-AR");
    const visibleProducts = products.filter((product) => {
        const matchesCategory =
            selectedCategory === "Todos" || product.categoria === selectedCategory;
        const matchesSearch =
            !normalizedSearch ||
            [product.detalle, product.codigo, product.categoria].some((value) =>
                value.toLocaleLowerCase("es-AR").includes(normalizedSearch),
            );
        return matchesCategory && matchesSearch;
    });
    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">PRODUCTOS DISPONIBLES</p>
                    <h1>Catálogo</h1>
                    <p>
                        {visibleProducts.length} productos en{" "}
                        {selectedCategory === "Todos"
                            ? "todas las categorías"
                            : selectedCategory}
                    </p>
                </div>
                <div className="heading-actions">
                    <div className="periods">
                        <button
                            className={period === "Hoy" ? "active" : ""}
                            onClick={() => setPeriod("Hoy")}
                        >
                            Hoy
                        </button>
                        <button
                            className={period === "Semana" ? "active" : ""}
                            onClick={() => setPeriod("Semana")}
                        >
                            Semana
                        </button>
                        <button
                            className={period === "Mes" ? "active" : ""}
                            onClick={() => setPeriod("Mes")}
                        >
                            Mes
                        </button>
                        <button
                            className={period === "Año" ? "active" : ""}
                            onClick={() => setPeriod("Año")}
                        >
                            Año
                        </button>
                    </div>
                    <button className="primary-button" onClick={onOpenCalculator}>
                        <ShoppingBag size={17} /> Ver carrito{" "}
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </button>
                </div>
            </div>
            <div className="catalog-toolbar">
                <div className="search-box">
                    <Search size={17} />
                    <input
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Buscar producto o código..."
                        aria-label="Buscar productos"
                    />
                </div>
                <div className="price-select">
                    <span>Lista de precio</span>
                    <b>Córdoba</b>
                    <ChevronDown size={15} />
                </div>
            </div>
            <div className="category-pills">
                {categories.map((category) => (
                    <button
                        className={selectedCategory === category ? "active" : ""}
                        style={{
                            borderColor: categoryColors[category],
                            color:
                                selectedCategory === category
                                    ? "#fff"
                                    : categoryColors[category],
                            backgroundColor:
                                selectedCategory === category
                                    ? categoryColors[category]
                                    : "#fff",
                        }}
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                        <small>
                            {category === "Todos"
                                ? products.length
                                : products.filter((product) => product.categoria === category)
                                    .length}
                        </small>
                    </button>
                ))}
            </div>
            <div className="product-grid">
                {visibleProducts.map((product) => (
                    <article className="product-card" key={product.codigo}>
                        <div
                            className="product-art"
                            style={{ background: `${categoryColors[product.categoria]}18` }}
                        >
                            <Image
                                src={product.img_URL}
                                alt={product.detalle}
                                width={240}
                                height={180}
                                unoptimized
                                onError={(event) => {
                                    event.currentTarget.style.display = "none";
                                }}
                            />
                            <button
                                className="quick-add"
                                aria-label={`Agregar ${product.detalle}`}
                                onClick={() => onAdd(product)}
                            >
                                <Plus size={17} />
                            </button>
                        </div>
                        <div className="product-info">
                            <span className="product-category">{product.categoria}</span>
                            <h3>{product.detalle}</h3>
                            <p>{product.codigo} · Producto de catálogo</p>
                            <div className="product-bottom">
                                <strong>{`$${product.precio_lista.toLocaleString("es-AR")}`}</strong>
                                <button className="add-button" onClick={() => onAdd(product)}>
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
}
const financingRates: Record<number, number> = {
    2: 0.5408,
    3: 0.3745,
    4: 0.2889,
    5: 0.2377,
    6: 0.2037,
    7: 0.1795,
    8: 0.1614,
    9: 0.1473,
    10: 0.1362,
    11: 0.1271,
    12: 0.1196,
    13: 0.1133,
    14: 0.1079,
    15: 0.1033,
    16: 0.0993,
    17: 0.0958,
    18: 0.0927,
    19: 0.09,
    20: 0.0875,
    21: 0.0854,
    22: 0.0834,
    23: 0.0816,
    24: 0.08,
};

function formatARS(value: number) {
    return value.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0,
    });
}

function Calculator({
    cart,
    onChangeQuantity,
    onRemove,
    onClearCart,
    period,
    setPeriod,
}: {
    cart: CartItem[];
    onChangeQuantity: (id: number, delta: number) => void;
    onRemove: (id: number) => void;
    onClearCart: () => void;
    period: "Hoy" | "Semana" | "Mes" | "Año";
    setPeriod: (p: "Hoy" | "Semana" | "Mes" | "Año") => void;
}) {
    const [paymentType, setPaymentType] = useState<"cash" | "financed">("cash");
    const [installments, setInstallments] = useState(2);
    const total = cart.reduce(
        (sum, item) => sum + item.product.precio_lista * item.quantity,
        0,
    );
    const minimumAdvance = total * 0.1;
    const [advance, setAdvance] = useState(minimumAdvance);
    const normalizedAdvance = Math.max(
        minimumAdvance,
        Math.min(total, advance || 0),
    );
    const balance = Math.max(total - normalizedAdvance, 0);
    const rate = financingRates[installments];
    const installmentValue = balance * rate;
    const financedTotal = installmentValue * installments;
    const interest = Math.max(financedTotal - balance, 0);
    const isFinanced = paymentType === "financed";

    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">HERRAMIENTA DE CIERRE</p>
                    <h1>Calculadora de venta</h1>
                    <p>Armá una propuesta clara para tu cliente</p>
                </div>
                <div className="heading-actions">
                    <div className="periods">
                        <button
                            className={period === "Hoy" ? "active" : ""}
                            onClick={() => setPeriod("Hoy")}
                        >
                            Hoy
                        </button>
                        <button
                            className={period === "Semana" ? "active" : ""}
                            onClick={() => setPeriod("Semana")}
                        >
                            Semana
                        </button>
                        <button
                            className={period === "Mes" ? "active" : ""}
                            onClick={() => setPeriod("Mes")}
                        >
                            Mes
                        </button>
                        <button
                            className={period === "Año" ? "active" : ""}
                            onClick={() => setPeriod("Año")}
                        >
                            Año
                        </button>
                    </div>
                    <Badge tone="green">Simulación activa</Badge>
                </div>
            </div>
            <div className="calculator-layout">
                <section className="panel calc-products">
                    <div className="panel-head">
                        <div>
                            <h2>Productos</h2>
                            <p>{cart.length} productos seleccionados</p>
                        </div>
                        <button className="text-button" onClick={onClearCart}>
                            Vaciar carrito
                        </button>
                    </div>
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <ShoppingBag size={28} />
                            <p>El carrito está vacío.</p>
                            <small>Volvé al catálogo para agregar productos.</small>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div className="calc-product" key={item.product.codigo}>
                                <span
                                    className="mini-art"
                                    style={{
                                        background: ["#dbeafe", "#fef3c7", "#dcfce7", "#fce7f3"][
                                            item.product.id % 4
                                        ],
                                    }}
                                >
                                    {["✦", "◈", "⌁", "◇"][item.product.id % 4]}
                                </span>
                                <span>
                                    <b>{item.product.detalle}</b>
                                    <small>{item.product.codigo}</small>
                                </span>
                                <div className="quantity">
                                    <button onClick={() => onChangeQuantity(item.product.id, -1)}>
                                        -
                                    </button>
                                    <b>{item.quantity}</b>
                                    <button onClick={() => onChangeQuantity(item.product.id, 1)}>
                                        +
                                    </button>
                                </div>
                                <strong>
                                    {formatARS(item.product.precio_lista * item.quantity)}
                                </strong>
                                <button
                                    className="remove-item"
                                    onClick={() => onRemove(item.product.id)}
                                >
                                    ×
                                </button>
                            </div>
                        ))
                    )}
                    <div className="calc-line">
                        <span>Total de productos</span>
                        <b>{formatARS(total)}</b>
                    </div>
                    <label className="field-label advance-field">
                        Anticipo <span>Mínimo {formatARS(minimumAdvance)}</span>
                        <input
                            type="number"
                            min={minimumAdvance}
                            max={total || undefined}
                            step={1000}
                            value={normalizedAdvance}
                            disabled={!total}
                            onChange={(event) => setAdvance(Number(event.target.value))}
                        />
                    </label>
                    <p className="minimum">
                        El anticipo no puede ser menor al 10% del total.
                    </p>
                </section>
                <section className="panel calc-summary">
                    <h2>Tipo de venta</h2>
                    <div className="pay-tabs">
                        <button
                            className={!isFinanced ? "active" : ""}
                            onClick={() => setPaymentType("cash")}
                        >
                            Contado
                        </button>
                        <button
                            className={isFinanced ? "active" : ""}
                            onClick={() => setPaymentType("financed")}
                        >
                            Financiado
                        </button>
                    </div>
                    {isFinanced && (
                        <>
                            <div className="installment-heading">
                                <span>Elegí cuotas</span>
                                <b>{installments} cuotas</b>
                            </div>
                            <div className="installment-grid">
                                {Object.keys(financingRates).map((value) => (
                                    <button
                                        className={installments === Number(value) ? "active" : ""}
                                        key={value}
                                        onClick={() => setInstallments(Number(value))}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                            <div className="finance-breakdown">
                                <div>
                                    <span>Saldo a financiar</span>
                                    <b>{formatARS(balance)}</b>
                                </div>
                                <div>
                                    <span>Coeficiente</span>
                                    <b>{rate.toFixed(4)}</b>
                                </div>
                                <div>
                                    <span>Interés</span>
                                    <b>{formatARS(interest)}</b>
                                </div>
                                <div>
                                    <span>Total financiado</span>
                                    <b>{formatARS(financedTotal)}</b>
                                </div>
                            </div>
                        </>
                    )}
                    <div className="total-box">
                        <span>
                            {isFinanced
                                ? `Valor de cada cuota (${installments})`
                                : "Total final"}
                        </span>
                        <strong>{formatARS(isFinanced ? installmentValue : total)}</strong>
                        <small>
                            {isFinanced
                                ? `Anticipo ${formatARS(normalizedAdvance)} · Coeficiente ${rate.toFixed(4)}`
                                : "Precio lista Córdoba · Sin interés"}
                        </small>
                    </div>
                    <button className="primary-button full" disabled={!total}>
                        Registrar venta <ArrowUpRight size={17} />
                    </button>
                </section>
            </div>
        </>
    );
}
function Network({
    period,
    setPeriod,
}: {
    period: "Hoy" | "Semana" | "Mes" | "Año";
    setPeriod: (p: "Hoy" | "Semana" | "Mes" | "Año") => void;
}) {
    const networkStats = [
        ["Demostraciones", "482", "+18,4%", ClipboardList, "blue"],
        ["Ventas", "216", "+14,2%", CircleDollarSign, "green"],
        ["No ventas", "188", "38,9%", X, "gray"],
        ["Cancelaciones", "24", "5,0%", Activity, "amber"],
        ["Postventas", "96", "+8,1%", ContactRound, "violet"],
        ["Facturación", "$48,6 M", "+12,8%", CircleDollarSign, "green"],
    ];
    const members = [
        ["VILJ0583", "Juan Álvarez", "Vendedor", "84", "42", "50,0%"],
        ["VILJ0421", "Martín Díaz", "Vendedor", "72", "31", "43,1%"],
        ["VILJ8888", "María López", "Vendedora", "61", "29", "47,5%"],
        ["81231", "Nueva Distribución", "Distribuidor", "128", "62", "48,4%"],
    ];
    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">ESTRUCTURA COMERCIAL</p>
                    <h1>Mi Red</h1>
                    <p>
                        Gestioná el crecimiento de tu organización y mirá su rendimiento en
                        detalle
                    </p>
                </div>
                <div className="heading-actions">
                    <div className="periods">
                        <button
                            className={period === "Hoy" ? "active" : ""}
                            onClick={() => setPeriod("Hoy")}
                        >
                            Hoy
                        </button>
                        <button
                            className={period === "Semana" ? "active" : ""}
                            onClick={() => setPeriod("Semana")}
                        >
                            Semana
                        </button>
                        <button
                            className={period === "Mes" ? "active" : ""}
                            onClick={() => setPeriod("Mes")}
                        >
                            Mes
                        </button>
                        <button
                            className={period === "Año" ? "active" : ""}
                            onClick={() => setPeriod("Año")}
                        >
                            Año
                        </button>
                    </div>
                    <button className="primary-button">
                        <Plus size={17} /> Invitar vendedor
                    </button>
                </div>
            </div>
            <div className="kpi-grid network-kpis">
                {networkStats.map(([label, value, change, Icon, tone]) => (
                    <Kpi
                        key={String(label)}
                        label={String(label)}
                        value={String(value)}
                        change={String(change)}
                        icon={Icon as typeof Users}
                        tone={String(tone)}
                    />
                ))}
            </div>
            <div className="network-layout">
                <section className="panel tree-panel">
                    <div className="panel-head">
                        <div>
                            <h2>Estructura de Temps</h2>
                            <p>78328 · 8 personas en tu red directa</p>
                        </div>
                        <button className="icon-button">
                            <Settings2 size={17} />
                        </button>
                    </div>
                    <div className="tree">
                        <div className="tree-node root">
                            <span className="avatar large">TP</span>
                            <span>
                                <b>78328 - Temps</b>
                                <small>Distribuidor principal · 216 ventas</small>
                            </span>
                            <Badge tone="green">Activo</Badge>
                        </div>
                        <div className="tree-branch">
                            {[
                                ["JA", "VILJ0583 - Juan Álvarez", "Vendedor · 42 ventas"],
                                ["MD", "VILJ0421 - Martín Díaz", "Vendedor · 31 ventas"],
                                [
                                    "NP",
                                    "81231 - Nueva Distribución",
                                    "Distribuidor · 62 ventas",
                                ],
                            ].map((item) => (
                                <div className="tree-node" key={item[1]}>
                                    <span
                                        className={`avatar ${item[0] === "NP" ? "blue-avatar" : ""}`}
                                    >
                                        {item[0]}
                                    </span>
                                    <span>
                                        <b>{item[1]}</b>
                                        <small>{item[2]}</small>
                                    </span>
                                    <ChevronRight size={16} />
                                </div>
                            ))}
                            <div className="tree-children">
                                <div className="tree-node">
                                    <span className="avatar">ML</span>
                                    <span>
                                        <b>VILJ8888 - María López</b>
                                        <small>Vendedora · 29 ventas</small>
                                    </span>
                                </div>
                                <div className="tree-node">
                                    <span className="avatar">RC</span>
                                    <span>
                                        <b>VILJ9012 - Rocío Castro</b>
                                        <small>Vendedora · 18 ventas</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="panel network-side">
                    <div className="panel-head">
                        <div>
                            <h2>Embudo comercial</h2>
                            <p>Cómo se comportó tu red este mes</p>
                        </div>
                        <Badge tone="green">44,8% conversión</Badge>
                    </div>
                    <div className="funnel-row">
                        <span>Demostraciones</span>
                        <b>482</b>
                        <i style={{ width: "100%" }} />
                    </div>
                    <div className="funnel-row">
                        <span>Concretadas</span>
                        <b>432</b>
                        <i style={{ width: "90%" }} />
                    </div>
                    <div className="funnel-row">
                        <span>Ventas</span>
                        <b>216</b>
                        <i style={{ width: "45%" }} />
                    </div>
                    <div className="funnel-row">
                        <span>Postventas con venta</span>
                        <b>96</b>
                        <i style={{ width: "20%" }} />
                    </div>
                    <div className="invite-box">
                        <Sparkles size={18} />
                        <span>
                            <b>Hacé crecer tu red</b>
                            <small>Invitá nuevos vendedores a tu equipo</small>
                        </span>
                        <ChevronRight size={16} />
                    </div>
                </section>
            </div>
            <section className="panel network-members">
                <div className="panel-head">
                    <div>
                        <h2>Rendimiento por integrante</h2>
                        <p>Comparativa de demostraciones, ventas y conversión</p>
                    </div>
                    <button className="text-button">
                        Ver actividad <ChevronRight size={15} />
                    </button>
                </div>
                <div className="members-table">
                    <div className="member-row member-head">
                        <span>Persona</span>
                        <span>Rol</span>
                        <span>Demostraciones</span>
                        <span>Ventas</span>
                        <span>Conversión</span>
                    </div>
                    {members.map((member) => (
                        <div className="member-row" key={member[0]}>
                            <span>
                                <b>{member[1]}</b>
                                <small>{member[0]}</small>
                            </span>
                            <span>
                                <Badge tone={member[2] === "Distribuidor" ? "blue" : "gray"}>
                                    {member[2]}
                                </Badge>
                            </span>
                            <strong>{member[3]}</strong>
                            <strong>{member[4]}</strong>
                            <strong className="success-text">{member[5]}</strong>
                        </div>
                    ))}
                </div>
            </section>
            <section className="network-detail-grid">
                <div className="panel">
                    <div className="panel-head">
                        <div>
                            <h2>Resultados</h2>
                            <p>Distribución de actividad</p>
                        </div>
                    </div>
                    <div className="result-metrics">
                        <div>
                            <span>Venta</span>
                            <b>216</b>
                            <i className="green-fill" style={{ width: "45%" }} />
                        </div>
                        <div>
                            <span>No venta</span>
                            <b>188</b>
                            <i className="gray-fill" style={{ width: "39%" }} />
                        </div>
                        <div>
                            <span>Cancelada</span>
                            <b>24</b>
                            <i className="amber-fill" style={{ width: "5%" }} />
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-head">
                        <div>
                            <h2>Facturación</h2>
                            <p>Últimos 6 meses</p>
                        </div>
                        <strong className="detail-total">$48,6 M</strong>
                    </div>
                    <div className="mini-bars">
                        {[48, 58, 44, 72, 63, 88].map((height, index) => (
                            <span key={index} style={{ height: `${height}%` }}>
                                <small>
                                    {["Abr", "May", "Jun", "Jul", "Ago", "Sep"][index]}
                                </small>
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

const clientHistorySales = [
    {
        id: "#V-0492",
        seller: "Tú",
        customer: "María González",
        dateObj: new Date(2026, 8, 8, 11, 8),
        displayDate: "08 sep, 11:08",
        product: products[4],
        quantity: 1,
        type: "Financiado",
    },
    {
        id: "#V-0491",
        seller: "Rocío Castro",
        customer: "Laura Fernández",
        dateObj: new Date(2026, 8, 2, 16, 20),
        displayDate: "02 sep, 16:20",
        product: products[6],
        quantity: 2,
        type: "Financiado",
    },
    {
        id: "#V-0490",
        seller: "Nuevo vendedor",
        customer: "Ana Torres",
        dateObj: new Date(2026, 8, 4, 11, 8),
        displayDate: "04 sep, 11:08",
        product: products[20],
        quantity: 1,
        type: "Financiado",
    },
];

function Sales({
    role,
    period,
    setPeriod,
}: {
    role: Role;
    period: "Hoy" | "Semana" | "Mes" | "Año";
    setPeriod: (p: "Hoy" | "Semana" | "Mes" | "Año") => void;
}) {
    const saleProducts = [products[0], products[6], products[20], products[39]];

    // Ventas con fechas reales para filtrado
    const allSales = [
        // ===== VENTAS DE HOY (11 de septiembre 2026) =====
        {
            id: "#V-0500",
            seller: "Tú",
            customer: "Diego Ramírez",
            dateObj: new Date(2026, 8, 11, 14, 30),
            displayDate: "Hoy, 14:30",
            product: products[15],
            quantity: 1,
            type: "Contado",
        },
        {
            id: "#V-0492",
            seller: "Tú",
            customer: "María González",
            dateObj: new Date(2026, 8, 11, 10, 42),
            displayDate: "Hoy, 10:42",
            product: saleProducts[0],
            quantity: 1,
            type: "Contado",
        },
        {
            id: "#V-0501",
            seller: "Rocío Castro",
            customer: "Patricia Gómez",
            dateObj: new Date(2026, 8, 11, 9, 15),
            displayDate: "Hoy, 09:15",
            product: products[23],
            quantity: 1,
            type: "Contado",
        },
        {
            id: "#V-0520",
            seller: "Nuevo vendedor",
            customer: "Fernando Iglesias",
            dateObj: new Date(2026, 8, 11, 8, 0),
            displayDate: "Hoy, 08:00",
            product: products[4],
            quantity: 1,
            type: "Contado",
        },

        // ===== VENTAS ESTA SEMANA (Últimos 7 días) =====
        {
            id: "#V-0491",
            seller: "Tú",
            customer: "Laura Fernández",
            dateObj: new Date(2026, 8, 10, 16, 20),
            displayDate: "Ayer, 16:20",
            product: saleProducts[1],
            quantity: 1,
            type: "Financiado",
        },
        {
            id: "#V-0502",
            seller: "Rocío Castro",
            customer: "Gabriela López",
            dateObj: new Date(2026, 8, 9, 11, 45),
            displayDate: "09 sep, 11:45",
            product: products[16],
            quantity: 2,
            type: "Contado",
        },
        {
            id: "#V-0503",
            seller: "Nuevo vendedor",
            customer: "Felipe Moreno",
            dateObj: new Date(2026, 8, 8, 13, 20),
            displayDate: "08 sep, 13:20",
            product: products[10],
            quantity: 1,
            type: "Financiado",
        },
        {
            id: "#V-0504",
            seller: "Martín Díaz",
            customer: "Sandra Ruiz",
            dateObj: new Date(2026, 8, 7, 10, 0),
            displayDate: "07 sep, 10:00",
            product: products[22],
            quantity: 1,
            type: "Contado",
        },

        // ===== VENTAS ESTE MES (Septiembre 2026) =====
        {
            id: "#V-0490",
            seller: "Tú",
            customer: "Ana Torres",
            dateObj: new Date(2026, 8, 4, 11, 8),
            displayDate: "04 sep, 11:08",
            product: saleProducts[2],
            quantity: 1,
            type: "Contado",
        },
        {
            id: "#V-0489",
            seller: "Tú",
            customer: "Pablo Ruiz",
            dateObj: new Date(2026, 8, 2, 18, 35),
            displayDate: "02 sep, 18:35",
            product: saleProducts[3],
            quantity: 2,
            type: "Financiado",
        },
        {
            id: "#V-0488",
            seller: "Rocío Castro",
            customer: "Carlos López",
            dateObj: new Date(2026, 8, 1, 14, 15),
            displayDate: "01 sep, 14:15",
            product: products[5],
            quantity: 1,
            type: "Contado",
        },
        {
            id: "#V-0505",
            seller: "Nuevo vendedor",
            customer: "Andrés Pérez",
            dateObj: new Date(2026, 8, 5, 15, 30),
            displayDate: "05 sep, 15:30",
            product: products[18],
            quantity: 1,
            type: "Financiado",
        },
        {
            id: "#V-0506",
            seller: "María López",
            customer: "Claudia Vega",
            dateObj: new Date(2026, 8, 3, 9, 45),
            displayDate: "03 sep, 09:45",
            product: products[25],
            quantity: 1,
            type: "Contado",
        },

        // ===== VENTAS AGOSTO 2026 =====
        {
            id: "#V-0487",
            seller: "Rocío Castro",
            customer: "Sofía Martínez",
            dateObj: new Date(2026, 7, 31, 9, 30),
            displayDate: "31 ago, 09:30",
            product: products[12],
            quantity: 2,
            type: "Financiado",
        },
        {
            id: "#V-0507",
            seller: "Tú",
            customer: "Beatriz Alonso",
            dateObj: new Date(2026, 7, 28, 14, 0),
            displayDate: "28 ago, 14:00",
            product: products[27],
            quantity: 1,
            type: "Contado",
        },
        {
            id: "#V-0486",
            seller: "Nuevo vendedor",
            customer: "Roberto García",
            dateObj: new Date(2026, 7, 30, 15, 45),
            displayDate: "30 ago, 15:45",
            product: products[7],
            quantity: 1,
            type: "Contado",
        },
        {
            id: "#V-0485",
            seller: "Martín Díaz",
            customer: "Fernanda Ruiz",
            dateObj: new Date(2026, 7, 28, 11, 20),
            displayDate: "28 ago, 11:20",
            product: products[21],
            quantity: 1,
            type: "Financiado",
        },
        {
            id: "#V-0508",
            seller: "Rocío Castro",
            customer: "Eduardo Santos",
            dateObj: new Date(2026, 7, 26, 16, 15),
            displayDate: "26 ago, 16:15",
            product: products[11],
            quantity: 1,
            type: "Contado",
        },
        {
            id: "#V-0484",
            seller: "María López",
            customer: "Javier Torres",
            dateObj: new Date(2026, 7, 27, 13, 0),
            displayDate: "27 ago, 13:00",
            product: products[8],
            quantity: 1,
            type: "Contado",
        },
        {
            id: "#V-0483",
            seller: "Nuevo vendedor",
            customer: "Valentina Cruz",
            dateObj: new Date(2026, 7, 25, 10, 30),
            displayDate: "25 ago, 10:30",
            product: products[28],
            quantity: 1,
            type: "Financiado",
        },

        // ===== VENTAS JULIO 2026 =====
        {
            id: "#V-0509",
            seller: "Tú",
            customer: "Marcelo Díaz",
            dateObj: new Date(2026, 6, 20, 11, 0),
            displayDate: "20 jul, 11:00",
            product: products[14],
            quantity: 1,
            type: "Contado",
        },
        {
            id: "#V-0510",
            seller: "Rocío Castro",
            customer: "Victoria Soto",
            dateObj: new Date(2026, 6, 15, 13, 45),
            displayDate: "15 jul, 13:45",
            product: products[17],
            quantity: 2,
            type: "Financiado",
        },
        {
            id: "#V-0511",
            seller: "Nuevo vendedor",
            customer: "Hugo Medina",
            dateObj: new Date(2026, 6, 10, 10, 30),
            displayDate: "10 jul, 10:30",
            product: products[9],
            quantity: 1,
            type: "Contado",
        },
    ];

    // Función para filtrar por período
    const filterByPeriod = (sale: (typeof allSales)[0]): boolean => {
        const today = new Date(2026, 8, 11); // 11 de septiembre 2026
        const saleDate = sale.dateObj;

        if (period === "Hoy") {
            return saleDate.toDateString() === today.toDateString();
        } else if (period === "Semana") {
            const sevenDaysAgo = new Date(today);
            sevenDaysAgo.setDate(today.getDate() - 7);
            return saleDate >= sevenDaysAgo && saleDate <= today;
        } else if (period === "Mes") {
            return (
                saleDate.getMonth() === today.getMonth() &&
                saleDate.getFullYear() === today.getFullYear()
            );
        } else if (period === "Año") {
            return saleDate.getFullYear() === today.getFullYear();
        }
        return true;
    };

    // Filtrar ventas según el rol
    let sales = clientHistorySales;
    if (role === "seller") {
        // Los vendedores ven sus propias ventas + las de sus vendedores directos (Rocío Castro y Nuevo vendedor)
        sales = clientHistorySales.filter(
            (sale) =>
                sale.seller === "Tú" ||
                sale.seller === "Rocío Castro" ||
                sale.seller === "Nuevo vendedor",
        );
    } else if (role === "distributor") {
        // Los distribuidores ven sus ventas y las de sus vendedores directos
        sales = clientHistorySales.filter(
            (sale) =>
                sale.seller === "Tú" ||
                sale.seller === "Juan Álvarez" ||
                sale.seller === "Martín Díaz" ||
                sale.seller === "María López" ||
                sale.seller === "Rocío Castro" ||
                sale.seller === "Nuevo vendedor",
        );
    }

    // Filtrar por período
    sales = sales.filter(filterByPeriod);

    const billing = sales.reduce(
        (sum, sale) => sum + sale.product.precio_lista * sale.quantity,
        0,
    );

    const periodLabel =
        period === "Hoy"
            ? "Hoy"
            : period === "Semana"
                ? "Esta semana"
                : period === "Mes"
                    ? "Septiembre 2026"
                    : "2026";

    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">RESULTADOS</p>
                    <h1>Mis ventas</h1>
                    <p>
                        {role === "seller"
                            ? "El historial de tus operaciones con productos del catálogo"
                            : "El historial de operaciones de tu red con productos del catálogo"}
                    </p>
                </div>
                <div className="periods">
                    <button
                        className={period === "Hoy" ? "active" : ""}
                        onClick={() => setPeriod("Hoy")}
                    >
                        Hoy
                    </button>
                    <button
                        className={period === "Semana" ? "active" : ""}
                        onClick={() => setPeriod("Semana")}
                    >
                        Semana
                    </button>
                    <button
                        className={period === "Mes" ? "active" : ""}
                        onClick={() => setPeriod("Mes")}
                    >
                        Mes
                    </button>
                    <button
                        className={period === "Año" ? "active" : ""}
                        onClick={() => setPeriod("Año")}
                    >
                        Año
                    </button>
                </div>
            </div>
            <div className="sales-total">
                <span>
                    <CircleDollarSign size={18} /> Facturación {periodLabel}
                </span>
                <strong>{formatARS(billing)}</strong>
                <small>
                    <ArrowUpRight size={13} /> 18,4% vs. período anterior
                </small>
            </div>
            <section className="panel sales-table">
                <div className="panel-head">
                    <div>
                        <h2>Ventas recientes</h2>
                        <p>{sales.length} operaciones con productos cargados</p>
                    </div>
                    <button className="outline-button">
                        Exportar <ArrowUpRight size={15} />
                    </button>
                </div>
                {sales.length > 0 ? (
                    sales.map((sale) => (
                        <div className="sale-row" key={sale.id}>
                            <span>
                                <b>{sale.id}</b>
                                <small>{sale.displayDate}</small>
                            </span>
                            <span>
                                <b>{sale.customer}</b>
                                <small>
                                    {sale.seller !== "Tú" ? `${sale.seller} · ` : ""}
                                    {sale.product.codigo} · {sale.product.detalle}
                                    {sale.quantity > 1 ? ` · x${sale.quantity}` : ""}
                                </small>
                            </span>
                            <Badge tone={sale.type === "Contado" ? "green" : "blue"}>
                                {sale.type}
                            </Badge>
                            <strong>
                                {formatARS(sale.product.precio_lista * sale.quantity)}
                            </strong>
                            <ChevronRight size={16} />
                        </div>
                    ))
                ) : (
                    <div className="empty-cart" style={{ padding: "2rem" }}>
                        <ShoppingBag size={28} />
                        <p>Sin ventas en este período</p>
                        <small>
                            No hay operaciones registradas para {periodLabel.toLowerCase()}
                        </small>
                    </div>
                )}
            </section>
        </>
    );
}
function CrmSales({
    period,
    setPeriod,
}: {
    period: "Hoy" | "Semana" | "Mes" | "Año";
    setPeriod: (p: "Hoy" | "Semana" | "Mes" | "Año") => void;
}) {
    const [customer, setCustomer] = useState("María González");
    const [selectedProducts, setSelectedProducts] = useState<CartItem[]>([]);
    const [saved, setSaved] = useState(false);
    const addProduct = (product: (typeof products)[number]) =>
        setSelectedProducts((current) => {
            const found = current.find((item) => item.product.id === product.id);
            return found
                ? current.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                )
                : [...current, { product, quantity: 1 }];
        });
    const changeProduct = (id: number, delta: number) =>
        setSelectedProducts((current) =>
            current.flatMap((item) =>
                item.product.id === id
                    ? item.quantity + delta > 0
                        ? [{ ...item, quantity: item.quantity + delta }]
                        : []
                    : [item],
            ),
        );
    const total = selectedProducts.reduce(
        (sum, item) => sum + item.product.precio_lista * item.quantity,
        0,
    );
    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">SIMULACIÓN COMERCIAL</p>
                    <h1>CRM</h1>
                    <p>Armá una propuesta con tus productos para cada cliente</p>
                </div>
                <div className="heading-actions">
                    <div className="periods">
                        <button
                            className={period === "Hoy" ? "active" : ""}
                            onClick={() => setPeriod("Hoy")}
                        >
                            Hoy
                        </button>
                        <button
                            className={period === "Semana" ? "active" : ""}
                            onClick={() => setPeriod("Semana")}
                        >
                            Semana
                        </button>
                        <button
                            className={period === "Mes" ? "active" : ""}
                            onClick={() => setPeriod("Mes")}
                        >
                            Mes
                        </button>
                        <button
                            className={period === "Año" ? "active" : ""}
                            onClick={() => setPeriod("Año")}
                        >
                            Año
                        </button>
                    </div>
                    <Badge tone={saved ? "green" : "blue"}>
                        {saved ? "Simulación guardada" : "Borrador"}
                    </Badge>
                </div>
            </div>
            <div className="crm-layout">
                <section className="panel crm-simulation">
                    <div className="panel-head">
                        <div>
                            <h2>Nueva simulación de venta</h2>
                            <p>Seleccioná un cliente y agregá productos del catálogo</p>
                        </div>
                        <Badge tone="amber">Mock</Badge>
                    </div>
                    <label className="field-label">
                        Cliente
                        <select
                            value={customer}
                            onChange={(event) => setCustomer(event.target.value)}
                        >
                            <option>María González</option>
                            <option>Laura Fernández</option>
                            <option>Ricardo Molina</option>
                            <option>Ana Torres</option>
                        </select>
                    </label>
                    <div className="crm-product-picker">
                        <div className="panel-head">
                            <div>
                                <h3>Productos disponibles</h3>
                                <p>{products.length} productos cargados</p>
                            </div>
                        </div>
                        <div className="crm-product-list">
                            {products.slice(0, 8).map((product) => (
                                <button
                                    className="crm-product-option"
                                    key={product.codigo}
                                    onClick={() => addProduct(product)}
                                >
                                    <span>
                                        <b>{product.detalle}</b>
                                        <small>
                                            {product.codigo} · {formatARS(product.precio_lista)}
                                        </small>
                                    </span>
                                    <Plus size={16} />
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="panel crm-order">
                    <div className="panel-head">
                        <div>
                            <h2>Venta simulada</h2>
                            <p>{selectedProducts.length} productos seleccionados</p>
                        </div>
                    </div>
                    {selectedProducts.length === 0 ? (
                        <div className="empty-cart">
                            <ShoppingBag size={28} />
                            <p>Sin productos todavía</p>
                            <small>
                                Elegí productos de la lista para armar la propuesta.
                            </small>
                        </div>
                    ) : (
                        <div className="crm-selected-list">
                            {selectedProducts.map((item) => (
                                <div className="crm-selected-product" key={item.product.codigo}>
                                    <span>
                                        <b>{item.product.detalle}</b>
                                        <small>{item.product.codigo}</small>
                                    </span>
                                    <div className="quantity">
                                        <button onClick={() => changeProduct(item.product.id, -1)}>
                                            -
                                        </button>
                                        <b>{item.quantity}</b>
                                        <button onClick={() => changeProduct(item.product.id, 1)}>
                                            +
                                        </button>
                                    </div>
                                    <strong>
                                        {formatARS(item.product.precio_lista * item.quantity)}
                                    </strong>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="calc-line">
                        <span>Total estimado</span>
                        <b>{formatARS(total)}</b>
                    </div>
                    <button
                        className="primary-button full"
                        disabled={!selectedProducts.length}
                        onClick={() => setSaved(true)}
                    >
                        Guardar simulación <ArrowUpRight size={17} />
                    </button>
                </section>
            </div>
        </>
    );
}

function Clients({
    period,
    setPeriod,
}: {
    period: "Hoy" | "Semana" | "Mes" | "Año";
    setPeriod: (p: "Hoy" | "Semana" | "Mes" | "Año") => void;
}) {
    const customers = [
        {
            name: "María González",
            phone: "+54 9 351 555-0182",
            job: "Docente",
            potential: "Alto",
            activity: "Demostración hoy · 10:30",
            initials: "MG",
            demos: 4,
            purchases: 2,
            postSales: 1,
            history: [
                {
                    type: "demo",
                    date: "Hoy",
                    description: "Demostración concretada",
                    product: "",
                    quantity: 0,
                    price: 0,
                    installments: 0,
                },
                {
                    type: "purchase",
                    date: "08 sep",
                    description: products[4].detalle,
                    product: products[4].detalle,
                    quantity: 1,
                    price: products[4].precio_lista,
                    installments: 3,
                },
                {
                    type: "postSale",
                    date: "15 sep",
                    description: "Postventa agendada",
                    product: "",
                    quantity: 0,
                    price: 0,
                    installments: 0,
                },
            ],
        },
        {
            name: "Laura Fernández",
            phone: "+54 9 351 555-0248",
            job: "Comerciante",
            potential: "Medio",
            activity: "Postventa · Ayer",
            initials: "LF",
            demos: 3,
            purchases: 1,
            postSales: 2,
            history: [
                {
                    type: "postSale",
                    date: "Ayer",
                    description: "Postventa realizada",
                    product: "",
                    quantity: 0,
                    price: 0,
                    installments: 0,
                },
                {
                    type: "purchase",
                    date: "02 sep",
                    description: products[6].detalle,
                    product: products[6].detalle,
                    quantity: 2,
                    price: products[6].precio_lista,
                    installments: 6,
                },
                {
                    type: "demo",
                    date: "28 ago",
                    description: "Demostración",
                    product: "",
                    quantity: 0,
                    price: 0,
                    installments: 0,
                },
            ],
        },
        {
            name: "Ricardo Molina",
            phone: "+54 9 351 555-0316",
            job: "Ingeniero",
            potential: "Alto",
            activity: "Agendado hoy · 17:30",
            initials: "RM",
            demos: 2,
            purchases: 0,
            postSales: 0,
            history: [
                {
                    type: "demo",
                    date: "Hoy",
                    description: "Demostración agendada",
                    product: "",
                    quantity: 0,
                    price: 0,
                    installments: 0,
                },
                {
                    type: "creation",
                    date: "01 sep",
                    description: "Cliente creado",
                    product: "",
                    quantity: 0,
                    price: 0,
                    installments: 0,
                },
            ],
        },
        {
            name: "Ana Torres",
            phone: "+54 9 351 555-0475",
            job: "Administrativa",
            potential: "Bajo",
            activity: "Última actividad · 04 sep",
            initials: "AT",
            demos: 2,
            purchases: 1,
            postSales: 1,
            history: [
                {
                    type: "purchase",
                    date: "04 sep",
                    description: products[20].detalle,
                    product: products[20].detalle,
                    quantity: 1,
                    price: products[20].precio_lista,
                    installments: 2,
                },
                {
                    type: "demo",
                    date: "04 sep",
                    description: "Demostración",
                    product: "",
                    quantity: 0,
                    price: 0,
                    installments: 0,
                },
            ],
        },
    ];
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(customers[0]);
    const filtered = customers.filter((customer) =>
        `${customer.name} ${customer.phone} ${customer.job}`
            .toLocaleLowerCase("es-AR")
            .includes(search.toLocaleLowerCase("es-AR")),
    );
    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">RELACIONES</p>
                    <h1>Mis Clientes</h1>
                    <p>Conocé el historial y el potencial de cada contacto</p>
                </div>
                <div className="heading-actions">
                    <div className="periods">
                        <button
                            className={period === "Hoy" ? "active" : ""}
                            onClick={() => setPeriod("Hoy")}
                        >
                            Hoy
                        </button>
                        <button
                            className={period === "Semana" ? "active" : ""}
                            onClick={() => setPeriod("Semana")}
                        >
                            Semana
                        </button>
                        <button
                            className={period === "Mes" ? "active" : ""}
                            onClick={() => setPeriod("Mes")}
                        >
                            Mes
                        </button>
                        <button
                            className={period === "Año" ? "active" : ""}
                            onClick={() => setPeriod("Año")}
                        >
                            Año
                        </button>
                    </div>
                    <button className="primary-button">
                        <Plus size={17} /> Nuevo cliente
                    </button>
                </div>
            </div>
            <div className="clients-layout">
                <section className="panel clients-list">
                    <div className="panel-head">
                        <div>
                            <h2>Clientes</h2>
                            <p>{customers.length} contactos activos</p>
                        </div>
                    </div>
                    <div className="search-box client-search">
                        <Search size={16} />
                        <input
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Buscar por nombre, teléfono o empleo..."
                        />
                    </div>
                    <div className="customer-cards">
                        {filtered.map((customer) => (
                            <button
                                className={`customer-card ${selected.name === customer.name ? "selected" : ""}`}
                                key={customer.name}
                                onClick={() => setSelected(customer)}
                            >
                                <span className="avatar">{customer.initials}</span>
                                <span className="customer-card-copy">
                                    <b>{customer.name}</b>
                                    <small>{customer.phone}</small>
                                    <small>{customer.job}</small>
                                </span>
                                <span
                                    className={`potential potential-${customer.potential.toLowerCase()}`}
                                >
                                    {customer.potential}
                                </span>
                                <ChevronRight size={16} />
                            </button>
                        ))}
                        {filtered.length === 0 && (
                            <div className="empty-cart">
                                <ContactRound size={28} />
                                <p>No encontramos clientes</p>
                                <small>Probá con otro nombre o teléfono.</small>
                            </div>
                        )}
                    </div>
                </section>
                <section className="panel client-detail">
                    <div className="client-profile">
                        <span className="avatar large">{selected.initials}</span>
                        <div>
                            <p className="eyebrow">FICHA DEL CLIENTE</p>
                            <h2>{selected.name}</h2>
                            <p>
                                {selected.phone} · {selected.job}
                            </p>
                        </div>
                        <span
                            className={`potential potential-${selected.potential.toLowerCase()}`}
                        >
                            {selected.potential}
                        </span>
                    </div>
                    <button className="primary-button full">
                        <Plus size={17} /> Agregar postventa
                    </button>
                    <div className="client-stat-grid">
                        <div>
                            <span>Demostraciones</span>
                            <b>{selected.demos}</b>
                        </div>
                        <div>
                            <span>Compras</span>
                            <b>{selected.purchases}</b>
                        </div>
                        <div>
                            <span>Postventas</span>
                            <b>{selected.postSales}</b>
                        </div>
                    </div>
                    <div className="client-section">
                        <h3>Información</h3>
                        <div className="info-grid">
                            <span>
                                Teléfono<b>{selected.phone}</b>
                            </span>
                            <span>
                                Empleo<b>{selected.job}</b>
                            </span>
                            <span>
                                Potencial<b>{selected.potential}</b>
                            </span>
                            <span>
                                Última actividad<b>{selected.activity}</b>
                            </span>
                        </div>
                    </div>
                    <div className="client-section">
                        <h3>Historial</h3>
                        <div className="client-history">
                            {(selected.history as any[]).map((event, index) => {
                                const isPurchase = event.type === "purchase";
                                const isDemo = event.type === "demo";
                                const isPostSale = event.type === "postSale";
                                const isCreation = event.type === "creation";
                                const badgeLabel = isPurchase
                                    ? "Compra"
                                    : isDemo
                                        ? "Demostración"
                                        : isPostSale
                                            ? "Postventa"
                                            : isCreation
                                                ? "Registro"
                                                : "Actividad";
                                return (
                                    <div
                                        key={`${selected.name}-${event.date}-${index}`}
                                        className={`history-item history-${event.type}`}
                                    >
                                        <i className={index === 0 ? "current" : ""} />
                                        <div className="history-content">
                                            <div className="history-header">
                                                <div>
                                                    <strong>
                                                        {isPurchase
                                                            ? event.product || event.description
                                                            : event.description}
                                                    </strong>
                                                    <small>{badgeLabel}</small>
                                                </div>
                                                <span>{event.date}</span>
                                            </div>
                                            {isPurchase ? (
                                                <div className="purchase-summary">
                                                    <span>
                                                        {event.quantity} und · {formatARS(event.price)}
                                                    </span>
                                                    <b>
                                                        {event.installments > 0
                                                            ? `${event.installments} cuota${event.installments > 1 ? "s" : ""}`
                                                            : "Pago inmediato"}
                                                    </b>
                                                </div>
                                            ) : (
                                                <div className="history-note">
                                                    <span>
                                                        {isDemo
                                                            ? "Cliente recibió la demostración del producto"
                                                            : isPostSale
                                                                ? "Seguimiento y soporte posterior"
                                                                : isCreation
                                                                    ? "Se registró el cliente en la base"
                                                                    : "Actividad registrada"}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

function GrowNetwork({ role }: { role: Role }) {
    const [inviteCode, setInviteCode] = useState("FIRST-JA-4827");
    const [copied, setCopied] = useState(false);
    const inviteLink = `JV-CRM.com/unirse/${inviteCode}`;
    const invitedSellers = role === "distributor"
        ? [
            { name: "Rocío Castro", code: "VILJ9012", status: "Invitación aceptada", date: "Hace 2 días" },
            { name: "Martín Díaz", code: "Pendiente de registro", status: "Invitación enviada", date: "Ayer" },
        ]
        : [{ name: "Nuevo vendedor", code: "Pendiente de registro", status: "Invitación enviada", date: "Hoy" }];
    const generateInvite = () => {
        setInviteCode(`FIRST-${role === "seller" ? "JA" : "CG"}-${Math.floor(1000 + Math.random() * 9000)}`);
        setCopied(false);
    };
    const copyInvite = async () => {
        try {
            await navigator.clipboard?.writeText(`https://${inviteLink}`);
        } catch {
            // Mock UI: keep the confirmation even when clipboard permissions are unavailable.
        }
        setCopied(true);
    };
    return <>
        <div className="page-heading"><div><p className="eyebrow">CRECIMIENTO DE RED</p><h1>Hacé crecer tu red</h1><p>Invitá nuevos vendedores a tu equipo y acompañalos desde su primer día.</p></div><Badge tone="green">{role === "distributor" ? "Tu organización" : "Tu equipo"}</Badge></div>
        <div className="network-growth-layout">
            <section className="panel network-growth-hero"><div className="network-growth-copy"><span className="network-growth-icon"><Users size={24} /></span><div><h2>Invitá nuevos vendedores a tu equipo</h2><p>Generá una invitación única y compartila por WhatsApp o copiá el enlace para enviarlo por el canal que prefieras.</p></div></div><div className="invite-code-card"><div><small>CÓDIGO DE INVITACIÓN</small><strong>{inviteCode}</strong></div><button className="icon-button" title="Generar nuevo código" onClick={generateInvite}><Sparkles size={17} /></button></div><div className="invite-link-row"><span><small>Enlace de invitación</small><b>{inviteLink}</b></span><button className="outline-button" onClick={copyInvite}><Copy size={15} /> {copied ? "Copiado" : "Copiar enlace"}</button><button className="primary-button"><Share2 size={15} /> Compartir</button></div></section>
            <section className="panel network-growth-stats"><div className="panel-head"><div><h2>Tu crecimiento</h2><p>Seguimiento de tus invitaciones</p></div></div><div className="growth-stat-grid"><div><span>Invitaciones enviadas</span><b>{invitedSellers.length + 3}</b></div><div><span>Vendedores activos</span><b>{invitedSellers.filter((seller) => seller.status === "Invitación aceptada").length + 4}</b></div><div><span>En seguimiento</span><b>{invitedSellers.filter((seller) => seller.status !== "Invitación aceptada").length}</b></div></div><div className="growth-steps"><div className="growth-step active"><i>1</i><span><b>Generá tu invitación</b><small>Usá un código único para cada vendedor.</small></span></div><div className="growth-step"><i>2</i><span><b>Compartila</b><small>Enviá el enlace por WhatsApp o mensaje.</small></span></div><div className="growth-step"><i>3</i><span><b>Acompañá el alta</b><small>Seguí el estado desde tu red.</small></span></div></div></section>
        </div>
        <section className="panel invited-sellers-panel"><div className="panel-head"><div><h2>Vendedores invitados</h2><p>Personas que están creciendo junto a tu equipo</p></div><button className="primary-button" onClick={generateInvite}><Plus size={16} /> Nueva invitación</button></div><div className="invited-sellers-list">{invitedSellers.map((seller) => <div className="invited-seller-row" key={seller.name}><span className="avatar">{seller.name.slice(0, 2).toUpperCase()}</span><span><b>{seller.name}</b><small>{seller.code} · {seller.date}</small></span><Badge tone={seller.status === "Invitación aceptada" ? "green" : "amber"}>{seller.status}</Badge><ChevronRight size={16} /></div>)}</div></section>
    </>;
}

function ReferralManager({ onBack }: { onBack: () => void }) {
    const [referrals, setReferrals] = useState<
        { name: string; phone?: string; source: string; status: string }[]
    >([
        {
            name: "Ricardo Molina",
            phone: "+54 9 351 555-0316",
            source: "Referido por María González",
            status: "Nuevo",
        },
        {
            name: "Patricia Gómez",
            phone: "+54 9 351 555-0420",
            source: "Referido por Laura Fernández",
            status: "Contactado",
        },
    ]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [source, setSource] = useState("María González");
    const [message, setMessage] = useState("");
    const addReferral = () => {
        if (!name.trim() || !phone.trim()) return;
        setReferrals((current) => [
            ...current,
            {
                name: name.trim(),
                phone: phone.trim(),
                source: `Referido por ${source}`,
                status: "Nuevo",
            },
        ]);
        setName("");
        setPhone("");
        setMessage("Contacto agregado para futuras demostraciones");
    };
    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">PROSPECCIÓN</p>
                    <h1>Contactos referidos</h1>
                    <p>
                        Agregá referidos de una demostración para llamarlos y agendar
                        futuras demostraciones.
                    </p>
                </div>
                <button className="outline-button" onClick={onBack}>
                    <ChevronRight size={15} /> Volver a Gestión
                </button>
            </div>
            <div className="activity-layout">
                <section className="panel activity-list">
                    <div className="panel-head">
                        <div>
                            <h2>Mis referidos</h2>
                            <p>{referrals.length} contactos listos para seguimiento</p>
                        </div>
                        <Badge tone="green">Seguimiento</Badge>
                    </div>
                    <div className="referral-list">
                        {referrals.map((referral) => (
                            <div
                                className="activity-row"
                                key={`${referral.name}-${referral.phone}`}
                            >
                                <span className="avatar">
                                    <UserPlus size={15} />
                                </span>
                                <span>
                                    <b>{referral.name}</b>
                                    <small>
                                        {referral.phone} · {referral.source}
                                    </small>
                                </span>
                                <Badge tone={referral.status === "Nuevo" ? "amber" : "green"}>
                                    {referral.status}
                                </Badge>
                                <button
                                    className="icon-button"
                                    title="Llamar para futura demostración"
                                >
                                    <Phone size={15} />
                                </button>
                                <button className="icon-button" title="Agendar demostración">
                                    <CalendarDays size={15} />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="panel activity-form">
                    <div className="panel-head">
                        <div>
                            <h2>Agregar referido</h2>
                            <p>
                                El contacto queda asociado al cliente que hizo la demostración.
                            </p>
                        </div>
                        <Badge tone="blue">Nuevo</Badge>
                    </div>
                    <label className="field-label">
                        Nombre del referido
                        <input
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Ej. Juan Pérez"
                        />
                    </label>
                    <label className="field-label">
                        Teléfono
                        <input
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder="+54 9 ..."
                        />
                    </label>
                    <label className="field-label">
                        Cliente que lo refirió
                        <select
                            value={source}
                            onChange={(event) => setSource(event.target.value)}
                        >
                            <option>María González</option>
                            <option>Laura Fernández</option>
                            <option>Ricardo Molina</option>
                            <option>Ana Torres</option>
                        </select>
                    </label>
                    <button
                        className="primary-button full"
                        disabled={!name.trim() || !phone.trim()}
                        onClick={addReferral}
                    >
                        <UserPlus size={17} /> Guardar referido
                    </button>
                    {message && (
                        <p className="form-success">
                            <CheckCircle2 size={15} /> {message}
                        </p>
                    )}
                </section>
            </div>
        </>
    );
}

function ActivityPage({
    role,
    period,
    setPeriod,
}: {
    role: Role;
    period: "Hoy" | "Semana" | "Mes" | "Año";
    setPeriod: (p: "Hoy" | "Semana" | "Mes" | "Año") => void;
}) {
    const [section, setSection] = useState<
        "agenda" | "demostraciones" | "postventas" | "llamados" | "referidos"
    >("agenda");
    const [activityType, setActivityType] = useState("Demostración");
    const [customer, setCustomer] = useState("María González");
    const [referralName, setReferralName] = useState("");
    const [referralPhone, setReferralPhone] = useState("");
    const [saved, setSaved] = useState(false);
    const [activities, setActivities] = useState([
        {
            time: "10:30",
            type: "Demostración",
            customer: "María González",
            detail: "Presentación de productos",
            status: "Pendiente",
        },
        {
            time: "14:00",
            type: "Postventa",
            customer: "Laura Fernández",
            detail: "Seguimiento de compra",
            status: "Confirmada",
        },
        {
            time: "17:30",
            type: "Llamado",
            customer: "Ricardo Molina",
            detail: "Confirmar demostración",
            status: "Agendada",
        },
    ]);
    const [referrals, setReferrals] = useState<
        { name: string; phone?: string; source: string; status: string }[]
    >([
        {
            name: "Ricardo Molina",
            phone: "+54 9 351 555-0316",
            source: "Referido por María González",
            status: "Nuevo",
        },
        {
            name: "Patricia Gómez",
            phone: "+54 9 351 555-0420",
            source: "Referido por Laura Fernández",
            status: "Contactado",
        },
    ]);
    const sectionLabels = {
        agenda: "Agenda",
        demostraciones: "Demostraciones",
        postventas: "Postventas",
        llamados: "Llamados",
        referidos: "Referidos",
    };
    const saveActivity = () => {
        setActivities((current) => [
            ...current,
            {
                time: "18:00",
                type: activityType,
                customer,
                detail:
                    activityType === "Demostración"
                        ? "Nueva demostración"
                        : activityType === "Postventa"
                            ? "Seguimiento de cliente"
                            : "Llamado programado",
                status: "Pendiente",
            },
        ]);
        setSaved(true);
    };
    const saveReferral = () => {
        if (!referralName.trim() || !referralPhone.trim()) return;
        setReferrals((current) => [
            ...current,
            {
                name: referralName.trim(),
                phone: referralPhone.trim(),
                source: `Referido por ${customer}`,
                status: "Nuevo",
            },
        ]);
        setReferralName("");
        setReferralPhone("");
        setSection("referidos");
        setSaved(true);
    };
    const activityItems =
        section === "agenda"
            ? activities
            : activities.filter(
                (item) =>
                    item.type.toLocaleLowerCase("es-AR") ===
                    section.slice(0, -1).toLocaleLowerCase("es-AR") ||
                    (section === "llamados" && item.type === "Llamado"),
            );
    if ((section as string) === "referidos")
        return <ReferralManager onBack={() => setSection("agenda")} />;
    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">GESTIÓN COMERCIAL</p>
                    <h1>Agenda y actividades</h1>
                    <p>Organizá demostraciones, postventas, llamados y referidos</p>
                </div>
                <div className="heading-actions">
                    <div className="periods">
                        <button
                            className={period === "Hoy" ? "active" : ""}
                            onClick={() => setPeriod("Hoy")}
                        >
                            Hoy
                        </button>
                        <button
                            className={period === "Semana" ? "active" : ""}
                            onClick={() => setPeriod("Semana")}
                        >
                            Semana
                        </button>
                        <button
                            className={period === "Mes" ? "active" : ""}
                            onClick={() => setPeriod("Mes")}
                        >
                            Mes
                        </button>
                        <button
                            className={period === "Año" ? "active" : ""}
                            onClick={() => setPeriod("Año")}
                        >
                            Año
                        </button>
                    </div>
                    <Badge tone={saved ? "green" : "blue"}>
                        {saved
                            ? "Actividad guardada"
                            : role === "seller"
                                ? "Mi agenda"
                                : "Agenda de mi red"}
                    </Badge>
                </div>
            </div>
            <div className="activity-tabs">
                {Object.entries(sectionLabels).map(([key, label]) => (
                    <button
                        key={key}
                        className={section === key ? "active" : ""}
                        onClick={() => setSection(key as typeof section)}
                    >
                        {key === "agenda" ? (
                            <CalendarDays size={16} />
                        ) : key === "llamados" ? (
                            <Phone size={16} />
                        ) : key === "referidos" ? (
                            <UserPlus size={16} />
                        ) : (
                            <CheckCircle2 size={16} />
                        )}
                        {label}
                    </button>
                ))}
            </div>
            <div className="activity-layout">
                <section className="panel activity-list">
                    <div className="panel-head">
                        <div>
                            <h2>{sectionLabels[section]}</h2>
                            <p>
                                {section === "agenda"
                                    ? "Tus próximas actividades comerciales"
                                    : "Seguimiento ordenado de tu cartera"}
                            </p>
                        </div>
                        <Badge tone="amber">
                            {section === "referidos"
                                ? referrals.length
                                : activityItems.length}{" "}
                            registros
                        </Badge>
                    </div>
                    {section === "referidos" ? (
                        <div className="referral-list">
                            {referrals.map((referral) => (
                                <div className="activity-row" key={referral.name}>
                                    <span className="avatar">
                                        <UserPlus size={15} />
                                    </span>
                                    <span>
                                        <b>{referral.name}</b>
                                        <small>{referral.source}</small>
                                    </span>
                                    <Badge tone={referral.status === "Nuevo" ? "amber" : "green"}>
                                        {referral.status}
                                    </Badge>
                                    <ChevronRight size={16} />
                                </div>
                            ))}
                        </div>
                    ) : activityItems.length > 0 ? (
                        <div className="activity-items">
                            {activityItems.map((item, index) => (
                                <div
                                    className="activity-row"
                                    key={`${item.customer}-${item.time}-${index}`}
                                >
                                    <span className="activity-time">{item.time}</span>
                                    <span>
                                        <b>
                                            {item.type} · {item.customer}
                                        </b>
                                        <small>{item.detail}</small>
                                    </span>
                                    <Badge
                                        tone={
                                            item.status === "Confirmada"
                                                ? "green"
                                                : item.status === "Agendada"
                                                    ? "blue"
                                                    : "amber"
                                        }
                                    >
                                        {item.status}
                                    </Badge>
                                    <ChevronRight size={16} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-cart">
                            <CalendarDays size={28} />
                            <p>Sin actividades</p>
                            <small>No hay registros para esta sección.</small>
                        </div>
                    )}
                </section>
                <section className="panel activity-form">
                    <div className="panel-head">
                        <div>
                            <h2>Registrar actividad</h2>
                            <p>Dejá trazabilidad de cada contacto</p>
                        </div>
                        <Badge tone="blue">Nuevo</Badge>
                    </div>
                    <label className="field-label">
                        Tipo de actividad
                        <select
                            value={activityType}
                            onChange={(event) => setActivityType(event.target.value)}
                        >
                            <option>Demostración</option>
                            <option>Postventa</option>
                            <option>Llamado</option>
                        </select>
                    </label>
                    <label className="field-label">
                        Cliente
                        <input
                            list="activity-customer-options"
                            value={customer}
                            onChange={(event) => setCustomer(event.target.value)}
                            placeholder="Escribí un cliente nuevo o elegí uno existente"
                        />
                        <datalist id="activity-customer-options">
                            <option value="María González" />
                            <option value="Laura Fernández" />
                            <option value="Ricardo Molina" />
                            <option value="Ana Torres" />
                        </datalist>
                    </label>
                    <label className="field-label">
                        Fecha y hora
                        <input type="datetime-local" defaultValue="2026-09-11T18:00" />
                    </label>
                    <button className="primary-button full" onClick={saveActivity}>
                        <Plus size={17} /> Guardar actividad
                    </button>
                </section>
            </div>
        </>
    );
}

export default function Home({ initialView = "dashboard" }: { initialView?: View }) {
    const [role, setRole] = useState<Role>("admin");
    const [view, setView] = useState<View>(initialView);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [period, setPeriod] = useState<"Hoy" | "Semana" | "Mes" | "Año">("Mes");
    const user = roleData[role];
    const navigate = (next: View) => {
        setView(next);
        setMobileMenu(false);
    };
    const addToCart = (product: (typeof products)[number]) =>
        setCart((current) => {
            const existing = current.find((item) => item.product.id === product.id);
            return existing
                ? current.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                )
                : [...current, { product, quantity: 1 }];
        });
    const changeQuantity = (id: number, delta: number) =>
        setCart((current) =>
            current.flatMap((item) =>
                item.product.id === id
                    ? item.quantity + delta > 0
                        ? [{ ...item, quantity: item.quantity + delta }]
                        : []
                    : [item],
            ),
        );
    const removeFromCart = (id: number) =>
        setCart((current) => current.filter((item) => item.product.id !== id));
    return (
        <div className="app-shell">
            <aside className={`sidebar ${mobileMenu ? "open" : ""}`}>
                <div className="brand">
                    <span className="brand-mark">
                        <BriefcaseBusiness size={19} />
                    </span>
                    <span>
                        <b>JV-CRM</b>
                        <small>gestión comercial</small>
                    </span>
                    <button className="close-menu" onClick={() => setMobileMenu(false)}>
                        <X size={18} />
                    </button>
                </div>
                <div className="role-switcher">
                    <span>Viendo como</span>
                    <label className="role-select">
                        <span className={`role-dot ${role}`} />
                        <select
                            value={role}
                            aria-label="Seleccionar rol"
                            onChange={(event) => {
                                setRole(event.target.value as Role);
                                setView("dashboard");
                            }}
                        >
                            <option value="admin">Administrador</option>
                            <option value="distributor">Distribuidor</option>
                            <option value="seller">Vendedor</option>
                        </select>
                        <ChevronDown size={14} />
                    </label>
                </div>
                <nav>
                    {navByRole[role].map(({ label, icon: Icon, view: itemView, href }) =>
                        href ? (
                            <a className={`nav-link ${view === itemView ? "active" : ""}`} href={href} key={label} onClick={(event) => { event.preventDefault(); navigate(itemView); }}>
                                <Icon size={18} />
                                <span>{label}</span>
                            </a>
                        ) : (
                            <button
                                key={label}
                                className={view === itemView ? "active" : ""}
                                onClick={() => navigate(itemView)}
                            >
                                <Icon size={18} />
                                <span>{label}</span>
                                {label === "Ventas" && <i className="nav-count">9</i>}
                            </button>
                        ),
                    )}
                </nav>
                <div className="sidebar-bottom">
                    <button>
                        <Settings2 size={18} />
                        <span>Configuración</span>
                    </button>
                    <div className="profile">
                        <span className="avatar">{user.initials}</span>
                        <span>
                            <b>{user.name}</b>
                            <small>{user.label}</small>
                        </span>
                        <ChevronRight size={15} />
                    </div>
                </div>
            </aside>
            <main className="main">
                <header className="topbar">
                    <button className="menu-button" onClick={() => setMobileMenu(true)}>
                        <Menu size={21} />
                    </button>
                    <span className="mobile-page">
                        {navByRole[role].find((item) => item.view === view)?.label}
                    </span>
                    <div className="topbar-actions">
                        <button className="icon-button">
                            <Search size={18} />
                        </button>
                        <button className="icon-button notification">
                            <Bell size={18} />
                            <i />
                        </button>
                        <span className="top-avatar">{user.initials}</span>
                    </div>
                </header>
                <div className="content">
                    {view === "dashboard" && (
                        <Dashboard role={role} period={period} setPeriod={setPeriod} />
                    )}
                    {view === "catalog" && (
                        <FilteredCatalog
                            cartCount={cart.reduce((count, item) => count + item.quantity, 0)}
                            onAdd={addToCart}
                            onOpenCalculator={() => navigate("calculator")}
                            period={period}
                            setPeriod={setPeriod}
                        />
                    )}
                    {view === "calculator" && (
                        <Calculator
                            cart={cart}
                            onChangeQuantity={changeQuantity}
                            onRemove={removeFromCart}
                            onClearCart={() => setCart([])}
                            period={period}
                            setPeriod={setPeriod}
                        />
                    )}
                    {view === "network" && (
                        <Network period={period} setPeriod={setPeriod} />
                    )}
                    {view === "crm" && <CrmSales period={period} setPeriod={setPeriod} />}
                    {view === "clients" && (
                        <Clients period={period} setPeriod={setPeriod} />
                    )}
                    {view === "activity" && (
                        <ActivityPage role={role} period={period} setPeriod={setPeriod} />
                    )}
                    {view === "referrals" && (
                        <ReferralManager onBack={() => navigate("activity")} />
                    )}
                    {view === "invite" && <GrowNetwork role={role} />}
                    {view === "sales" && (
                        <Sales role={role} period={period} setPeriod={setPeriod} />
                    )}
                </div>
                <div className="mobile-bottom-nav">
                    {(role === "seller" || role === "distributor"
                        ? [
                            ...navByRole[role].filter((item) => ["dashboard", "catalog", "calculator"].includes(item.view)).slice(0, 3),
                            ...navByRole[role].filter((item) => item.view === "referrals" || item.view === "sales"),
                        ]
                        : navByRole[role].slice(0, 4))
                        .map(({ label, icon: Icon, view: itemView, href }) =>
                            href ? (
                                <a className={view === itemView ? "active" : ""} href={href} key={label} onClick={(event) => { event.preventDefault(); navigate(itemView); }}>
                                    <Icon size={19} />
                                    <span>{label}</span>
                                </a>
                            ) : (
                                <button
                                    className={view === itemView ? "active" : ""}
                                    key={label}
                                    onClick={() => navigate(itemView)}
                                >
                                    <Icon size={19} />
                                    <span>{label}</span>
                                </button>
                            )
                        )}
                    <button onClick={() => setMobileMenu(true)}>
                        <Menu size={19} />
                        <span>Más</span>
                    </button>
                </div>
            </main>
        </div>
    );
}
