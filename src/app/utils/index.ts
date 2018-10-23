export const isProduction = () => process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
