// Type definitions for pdf-image 2.0
// Project: https://github.com/mooz/node-pdf-image#readme
// Definitions by: NickLatkovich <https://github.com/nicklatkovich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

export type ConvertOptionKey =
    | '-adaptive-blur'
    | '-adaptive-resize'
    | '-adaptive-sharpen'
    | '-adjoin'
    | '-affine'
    | '-alpha'
    | '-annotate'
    | '-antialias'
    | '-append'
    | '-authenticate'
    | '-auto-gamma'
    | '-auto-level'
    | '-auto-orient'
    | '-auto-threshold'
    | '-background'
    | '-bench'
    | '-bias'
    | '-black-threshold'
    | '-blue-primary'
    | '-blue-shift'
    | '-blur'
    | '-border'
    | '-bordercolor'
    | '-brightness-contrast'
    | '-canny'
    | '-caption'
    | '-cdl'
    | '-channel'
    | '-charcoal'
    | '-chop'
    | '-clahe'
    | '-clamp'
    | '-clip'
    | '-clip-mask'
    | '-clip-path'
    | '-clone'
    | '-clut'
    | '-connected-components'
    | '-contrast-stretch'
    | '-coalesce'
    | '-colorize'
    | '-color-matrix'
    | '-colors'
    | '-colorspace'
    | '-combine'
    | '-comment'
    | '-compare'
    | '-complexoperator'
    | '-compose'
    | '-composite'
    | '-compress'
    | '-contrast'
    | '-convolve'
    | '-copy'
    | '-crop'
    | '-cycle'
    | '-decipher'
    | '-debug'
    | '-define'
    | '-deconstruct'
    | '-delay'
    | '-delete'
    | '-density'
    | '-depth'
    | '-despeckle'
    | '-direction'
    | '-display'
    | '-dispose'
    | '-distribute-cache'
    | '-distort'
    | '-dither'
    | '-draw'
    | '-duplicate'
    | '-edge'
    | '-emboss'
    | '-encipher'
    | '-encoding'
    | '-endian'
    | '-enhance'
    | '-equalize'
    | '-evaluate'
    | '-evaluate-sequence'
    | '-extent'
    | '-extract'
    | '-family'
    | '-features'
    | '-fft'
    | '-fill'
    | '-filter'
    | '-flatten'
    | '-flip'
    | '-floodfill'
    | '-flop'
    | '-font'
    | '-format'
    | '-frame'
    | '-function'
    | '-fuzz'
    | '-fx'
    | '-gamma'
    | '-gaussian-blur'
    | '-geometry'
    | '-gravity'
    | '-grayscale'
    | '-green-primary'
    | '-help'
    | '-hough-lines'
    | '-identify'
    | '-ift'
    | '-implode'
    | '-insert'
    | '-intensity'
    | '-intent'
    | '-interlace'
    | '-interline-spacing'
    | '-interpolate'
    | '-interword-spacing'
    | '-kerning'
    | '-kmeans'
    | '-kuwahara'
    | '-label'
    | '-lat'
    | '-layers'
    | '-level'
    | '-limit'
    | '-linear-stretch'
    | '-liquid-rescale'
    | '-list'
    | '-log'
    | '-loop'
    | '-mattecolor'
    | '-median'
    | '-mean-shift'
    | '-metric'
    | '-mode'
    | '-modulate'
    | '-moments'
    | '-monitor'
    | '-monochrome'
    | '-morph'
    | '-morphology'
    | '-motion-blur'
    | '-negate'
    | '-noise'
    | '-normalize'
    | '-opaque'
    | '-ordered-dither'
    | '-orient'
    | '-page'
    | '-paint'
    | '-perceptible'
    | '-ping'
    | '-pointsize'
    | '-polaroid'
    | '-poly'
    | '-posterize'
    | '-precision'
    | '-preview'
    | '-print'
    | '-process'
    | '-profile'
    | '-quality'
    | '-quantize'
    | '-quiet'
    | '-radial-blur'
    | '-raise'
    | '-random-threshold'
    | '-range-threshold'
    | '-read-mask'
    | '-red-primary'
    | '-regard-warnings'
    | '-region'
    | '-remap'
    | '-render'
    | '-repage'
    | '-resample'
    | '-resize'
    | '-respect-parentheses'
    | '-roll'
    | '-rotate'
    | '-sample'
    | '-sampling-factor'
    | '-scale'
    | '-scene'
    | '-seed'
    | '-segment'
    | '-selective-blur'
    | '-separate'
    | '-sepia-tone'
    | '-set'
    | '-shade'
    | '-shadow'
    | '-sharpen'
    | '-shave'
    | '-shear'
    | '-sigmoidal-contrast'
    | '-smush'
    | '-size'
    | '-sketch'
    | '-solarize'
    | '-splice'
    | '-spread'
    | '-statistic'
    | '-strip'
    | '-stroke'
    | '-strokewidth'
    | '-stretch'
    | '-style'
    | '-swap'
    | '-swirl'
    | '-synchronize'
    | '-taint'
    | '-texture'
    | '-threshold'
    | '-thumbnail'
    | '-tile'
    | '-tile-offset'
    | '-tint'
    | '-transform'
    | '-transparent'
    | '-transparent-color'
    | '-transpose'
    | '-transverse'
    | '-treedepth'
    | '-trim'
    | '-type'
    | '-undercolor'
    | '-unique-colors'
    | '-units'
    | '-unsharp'
    | '-verbose'
    | '-version'
    | '-view'
    | '-vignette'
    | '-virtual-pixel'
    | '-wave'
    | '-wavelet-denoise'
    | '-weight'
    | '-white-point'
    | '-white-threshold'
    | '-write'
    | '-write-mask';

export type ConvertOptions = { [key in ConvertOptionKey]?: string };

export interface Options {
    pdfFileBaseName?: string;
    convertOptions?: ConvertOptions;
    convertExtension?: string;
    graphicsMagick?: boolean;
    outputDirectory?: string;
}

export type OptionalSpread<CombinedImage extends boolean> = CombinedImage extends true
    ? [Options & { combinedImage: CombinedImage }]
    : [] | [Options & { combinedImage?: CombinedImage }];

export interface PDFInfo {
    Creator: string;
    Producer: string;
    CreationDate: string;
    Tagged: string;
    UserProperties: string;
    Suspects: string;
    Form: string;
    JavaScript: string;
    Pages: string;
    Encrypted: string;
    'Page size': string;
    'Page rot': string;
    'File size': string;
    Optimized: string;
    'PDF version': string;
    [key: string]: string;
}

export class PDFImage<CombinedImage extends boolean = false> {
    constructor(path: string, ...options: OptionalSpread<CombinedImage>);
    combineImages(imagePaths: readonly string[]): Promise<string>;
    constructCombineCommandForFile(imagePaths: readonly string[]): string;
    constructConvertCommandForPage(pageNumber: number): string;
    constructConvertOptions(): string;
    constructGetInfoCommand(): string;
    convertFile(): Promise<CombinedImage extends true ? string : string[]>;
    convertPage(pageNumber: number): Promise<string>;
    getInfo(): Promise<PDFInfo>;
    getOutputImagePathForFile(): string;
    getOutputImagePathForPage(pageNumber: number): string;
    parseGetInfoCommandOutput(output: string): { [key: string]: string };
    setConvertExtension(convertExtension?: string): void;
    setConvertOptions(convertOptions?: Readonly<ConvertOptions>): void;
    setPdfFileBaseName(pdfFileBaseName?: string): void;
}
