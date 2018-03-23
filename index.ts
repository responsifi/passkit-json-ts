export interface PKPassJson {
    // Standard Keys
    description: string
    formatVersion: number
    organizationName: string
    passTypeIdentifier: string
    serialNumber: string
    teamIdentifier: string

    // Associated App Keys
    appLaunchURL?: string
    associatedStoreIdentifiers?: Array<number>

    // Companion App Keys
    userInfo?: object

    // Expiration Keys
    expirationDate?: string
    voided?: boolean

    // Relevance Keys
    beacons?: Array<BeaconDictionary>
    locations?: Array<LocationDictionary>
    maxDistance?: number
    relevantDate?: string

    // Style Keys
    // TODO: Provide exactly one key—the key that corresponds with the pass’s type.
    boardingPass?: PassStructureDictionary
    coupon?: PassStructureDictionary
    eventTicket?: PassStructureDictionary
    generic?: PassStructureDictionary
    storeCard?: PassStructureDictionary

    // Visual Appearance Keys
    // TODO: 'color, as a string'
    barcode?: BarcodeDictionary
    barcodes?: Array<BarcodeDictionary>
    backgroundColor?: string
    foregroundColor?: string
    groupingIdentifier?: string
    labelColor?: string
    logoText?: string
    suppressStripShine?: boolean

    // Web Service Keys
    authenticationToken: string
    webServiceURL: string

    // nfc-enabled pass keys
    nfc?: NFCDictionary
}

interface PassStructureDictionary {
    auxiliaryFields?: Array<StandardFieldDictionary>
    backFields?: Array<StandardFieldDictionary>
    headerFields?: Array<StandardFieldDictionary>
    primaryFields?: Array<StandardFieldDictionary>
    secondaryFields?: Array<StandardFieldDictionary>
    transitType: PKTransitType
}

// TODO: 16-bit unsigned integer
interface BeaconDictionary {
    major?: number
    minor?: number
    proximityUUID: string
    relevantText?: string
}

interface LocationDictionary {
    altitude?: number
    latitude: number
    longitude: number
    relevantText?: string
}

// TODO: For dictionaries in the `barcodes` array, you may also use `PKBarcodeFormatCode128`
interface BarcodeDictionary {
    altText?: string
    format: PKBarcodeFormat
    message: string
    messageEncoding: string
}

interface NFCDictionary {
    message: string
    encryptionPublicKey?: string
}

/**
 * Information about a field.
 * These keys are used for all dictionaries that define a field.
 */
// TODO: attributedValue, value: localizable string, ISO 8601 date as a string, or number
interface StandardFieldDictionary {
    attributedValue?: string
    changeMessage?: string
    dataDetectorTypes?: Array<PKDataDetectorType>
    key: string
    label?: string
    textAlignment?: PKTextAlignment
    value: string
}

/**
 * Information about how a date should be displayed in a field.
 * If any of these keys is present, the value of the field is treated as a date.
 * Either specify both a date style and a time style, or neither.
 */
interface DateStyle {
    dateStyle: PKDateStyle
    ignoresTimeZone?: boolean
    isRelative?: boolean
    timeStyle: PKDateStyle
}

/**
 * Information about how a number should be displayed in a field.
 * These keys are optional if the field’s value is a number; otherwise, they are not allowed.
 * Only one of these keys is allowed per field.
 */
interface NumberStyle {
    currencyCode: string
    numberStyle: PKNumberStyle
}

type PKBarcodeFormat =
    'PKBarcodeFormatQR' |
    'PKBarcodeFormatPDF417' |
    'PKBarcodeFormatAztec'

type PKDataDetectorType =
    'PKDataDetectorTypePhoneNumber' |
    'PKDataDetectorTypeLink' |
    'PKDataDetectorTypeAddress' |
    'PKDataDetectorTypeCalendarEvent'

type PKDateStyle =
    'PKDateStyleNone' |
    'PKDateStyleShort' |
    'PKDateStyleMedium' |
    'PKDateStyleLong' |
    'PKDateStyleFull'

type PKNumberStyle =
    'PKNumberStyleDecimal' |
    'PKNumberStylePercent' |
    'PKNumberStyleScientific' |
    'PKNumberStyleSpellOut'

type PKTextAlignment =
    'PKTextAlignmentLeft' |
    'PKTextAlignmentCenter' |
    'PKTextAlignmentRight' |
    'PKTextAlignmentNatural'

type PKTransitType =
    'PKTransitTypeAir' |
    'PKTransitTypeBoat' |
    'PKTransitTypeBus' |
    'PKTransitTypeGeneric' |
    'PKTransitTypeTrain' 
