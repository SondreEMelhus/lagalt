/**
 * Method uses to sanitize a users inputs
 */
export function sanitize (contaminatedInput) {
    return contaminatedInput.replace(/&/g, '')
                            .replace(/</g, '')
                            .replace(/>/g, '')
                            .replace(/"/g, '')
                            .replace(/'/g, '');
}