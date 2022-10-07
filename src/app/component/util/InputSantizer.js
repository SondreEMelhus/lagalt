//TODO: Se litt mer på denne
export function santize (contaminatedInput) {
    return contaminatedInput.replace(/&/g, '')
                            .replace(/</g, '')
                            .replace(/>/g, '')
                            .replace(/"/g, '')
                            .replace(/'/g, '');
}