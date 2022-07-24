
import { Text } from './Text';

export function Page(content: string, color: string) {
    return `
        
        ${Text(content, color)}
    `
}

