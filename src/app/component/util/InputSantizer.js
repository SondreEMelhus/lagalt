export function sanitize (contaminatedInput) {
    return contaminatedInput.replace(/&/g, ' ')
                            .replace(/</g, ' ')
                            .replace(/>/g, ' ')
                            .replace(/"/g, ' ')
                            .replace(/'/g, ' ');
}