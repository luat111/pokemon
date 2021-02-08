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
export function renderSymbol(nameItem, nameMenu) {
    switch (nameMenu) {
        case "Color":
            return SymbolItemColor(nameItem);
        case "Egg Group":
            return SymbolItemEgg(nameItem);
        case "Habitat":
            return SymbolItemHabitat(nameItem);
        default:
            return;
    }
}
