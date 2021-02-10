const SymbolItemColor = (nameItem) => {
    switch (nameItem) {
        case "black":
            return "⚫";
        case "blue":
            return "🔵";
        case "gray":
            return "🌑";
        case "green":
            return "🟢";
        case "pink":
            return "🍥";
        case "purple":
            return "🟣";
        case "red":
            return "🔴";
        case "brown":
            return "🟤";
        case "white":
            return "⚪";
        case "yellow":
            return "🟡";
        default:
            return;
    }
}
const SymbolItemEgg = (nameItem) => {
    if (nameItem === "no-eggs")
        return "❌";
    return "🥚";
}
const SymbolItemHabitat = (nameItem) => {
    switch (nameItem) {
        case "cave":
            return "🕳️";
        case "forest":
            return "🌲";
        case "grassland":
            return "🌿";
        case "rare":
            return "💫";
        case "rough-terrain":
            return "🎢";
        case "sea":
            return "🌊";
        case "urban":
            return "🏰";
        case "waters-edge":
            return "🏖️";
        case "mountain":
            return "⛰️";
        default:
            return "";
    }
}
const SymbolItemType = (nameItem) => {
    switch (nameItem) {
        case "normal":
            return "🚫";
        case "fighting":
            return "👊";
        case "flying":
            return "🌪️";
        case "poison":
            return "☠️";
        case "ground":
            return "🟤";
        case "rock":
            return "🎢";
        case "bug":
            return "🐞";
        case "ghost":
            return "👻";
        case "steel":
            return "🛡️";
        case "fire":
            return "🔥";
        case "water":
            return "🌊";
        case "grass":
            return "🍀";
        case "electric":
            return "⚡";
        case "psychic":
            return "🔮";
        case "dragon":
            return "🐉";
        case "dark":
            return "⚫";
        case "fairy":
            return "🧚";
        case "unknown":
            return "❓";
        case "shadow":
            return "🌑";        
        default:
            return "";
    }
}
export function renderSymbol(nameItem, nameMenu) {
    switch (nameMenu) {
        case "Color":
            return SymbolItemColor(nameItem);
        case "Egg Group":
            return SymbolItemEgg(nameItem);
        case "Habitat":
            return SymbolItemHabitat(nameItem);
        case "Type":
            return SymbolItemType(nameItem);
        default:
            return;
    }
}
