export function Text(text: string, color: string) {
    return `<div class="container">
        <p class="${color}">${text}</p>
    </div>`
}