import createElement from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });
    // todo: show fighter info (image, name, health, etc.)
    if (fighter) {
        const { name, health, attack, defense, source } = fighter

        const fighterImage = document.createElement('img');
        fighterImage.src = source;

        const fighterNameSpan = document.createElement('span');
        fighterNameSpan.textContent = name;

        const healthSpan = document.createElement('span');
        healthSpan.textContent = `Health: ${health}%`;

        const attackSpan = document.createElement('span');
        attackSpan.textContent = `Attack: ${attack}%`;

        const defenseSpan = document.createElement('span');
        defenseSpan.textContent = `Defense: ${defense}%`;

        fighterElement.appendChild(fighterImage)
        fighterElement.appendChild(fighterNameSpan)
        fighterElement.appendChild(healthSpan)
        fighterElement.appendChild(attackSpan)
        fighterElement.appendChild(defenseSpan)
    }

    return fighterElement;
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}