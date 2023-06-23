
export interface BaseEntity {
    id: string;
    version: number;
}

export interface BaseEntityWithBasicAudit extends BaseEntity {
    createdAt: Date;
    updatedAt: Date;
}

export interface BaseEntityWithCreatorAudit extends BaseEntityWithBasicAudit {
    userId: string;
}

export interface BaseSerialEntity {
    id: number;
    version: number;
}

export interface BaseSerialEntityWithBasicAudit extends BaseSerialEntity {
    createdAt: Date;
    updatedAt: Date;
}

export interface BaseSerialEntityWithCreatorAudit extends BaseSerialEntityWithBasicAudit {
    userId: string;
}

export interface Account extends BaseSerialEntityWithCreatorAudit {
    currentBalance: number;
    availableBalance: number;
    accountType: string;
    billingAddresses: JsonBWrapper<BillingAddress[]>;
    withdrawalOpen: boolean;
    closed: boolean;
}

export interface AccountType {
    id: string;
    minimumRequiredBalance: number;
    payingInterest: boolean;
}

export interface BillingAddress {
    scope: string;
    email: string;
    name: string;
}

export interface AddressScope {
}

export interface Category {
    id: string;
}

export interface Tag {
    id: string;
}

export interface App extends BaseEntityWithCreatorAudit {
    name: string;
    logoUrl: string;
    callbackUrl: string;
    email: string;
    password: string;
    roleId: string;
}

export interface Authority {
    id: string;
}

export interface Invitation extends BaseEntityWithCreatorAudit {
    activity: string;
    email: string;
}

export interface Role extends BaseEntity {
    name: string;
    authorities: string[];
    accountAuthorities: { [index: string]: string[] };
    description: string;
}

export interface SupplierProfile extends BaseEntity {
    merchantName: string;
    phone: string;
    picture: string;
    country: string;
    city: string;
    address: string;
    zipCode: string;
    postalCode: string;
    longitude: number;
    latitude: number;
    documentLinks: JsonBWrapper<{ [index: string]: string }>;
    userId: string;
    invitedBy: string;
    placeId: string;
    verified: boolean;
}

export interface User extends BaseEntityWithBasicAudit {
    email: string;
    roleId: string;
    emailVerifiedAt: Date;
}

export interface UserProfile extends BaseEntity {
    firstName: string;
    lastName: string;
    phone: string;
    picture: string;
    address: string;
    longitude: number;
    latitude: number;
    username: string;
    documentLinks: JsonBWrapper<{ [index: string]: string }>;
    userId: string;
    placeId: string;
}

export interface Document {
    src: string;
    mediaType: string;
}

export interface DocumentDescription {
    description: string;
    mediaTypes: string[];
}

export interface JsonBWrapper<T> {
    value: T;
}

export interface ActivityLog extends BaseEntityWithCreatorAudit {
    userAgent: string;
    ipAddress: string;
    endPoint: string;
    tag: string;
    method: string;
    queryString: string;
}

export interface EmailAddress {
    address: string;
    personal: string;
}

export interface MediaHolder {
    id: MediaKey;
}

export interface MediaKey extends Serializable {
    mediaId: string;
    targetId: string;
    targetType: string;
}

export interface MediaSlot extends BaseEntityWithCreatorAudit {
    mediaType: string;
    role: string;
    src: string;
    fileName: string;
    thumbnailSrc: string;
    fileSize: number;
    bitRate: string;
    externalKey: string;
}

export interface NewsLetter extends BaseEntityWithCreatorAudit {
    topic: string;
    content: string;
}

export interface NewsLetterSubscription extends BaseEntity {
    email: string;
    topic: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Place extends BaseEntity {
    country: string;
    locality: string;
    route: string;
    postalCode: string;
    streetNumber: string;
    administrativeAreaLevel1: string;
    administrativeAreaLevel2: string;
    formattedAddress: string;
    longitude: number;
    latitude: number;
}

export interface Product extends BaseEntityWithCreatorAudit {
    name: string;
    originCountryId: string;
    productDetailsId: string;
    sellerProfileId: string;
    category: string;
    tags: string;
    terreBasic: boolean;
}

export interface ProductDeclineReason extends BaseSerialEntityWithCreatorAudit {
    stockId: number;
    productId: string;
    productDetailsId: string;
    reason: string;
}

export interface ProductDetails extends BaseEntityWithBasicAudit {
    details: string;
    scientificName: string;
    productVariety: string;
    cropYear: number;
    productionMode: string;
    genetics: string;
    moisture: number;
    productId: string;
}

export interface ProductSampleRequestModel extends BaseEntity {
    productId: string;
    returnEmail: string;
    placeId: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductStock extends BaseSerialEntityWithCreatorAudit {
    productId: string;
    unitPrice: number;
    currency: string;
    quantity: number;
    unitMeasure: string;
    publishedAt: Date;
    verifiedAt: Date;
    declinedAt: Date;
    verifiedBy: string;
    declinedBy: string;
}

export interface ListRequest<T> {
    list: T[];
}

export interface SingleValueRequest<T> {
    value: T;
}

export interface SupplierInviteRequest {
    emailList: string[];
    message: string;
}

export interface LoginUserRequest {
    email: string;
    password: string;
}

export interface SignUpSupplierRequest {
    email: string;
    password: string;
    merchantName: string;
    firstName: string;
    lastName: string;
    phone: string;
    place: Place;
}

export interface SignUpUserRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface CreateProductRequest {
    category: string;
    name: string;
    countryId: string;
    terreBasic: boolean;
}

export interface ProductSampleRequest {
    productId: string;
    returnEmail: string;
    address: Place;
}

export interface ApiResponse<T> {
    content: T;
    errors: T[];
}

export interface PageCopy<T> {
    totalPages: number;
    totalElements: number;
    size: number;
    content: T[];
    number: number;
    first: boolean;
    last: boolean;
    numberOfElements: number;
    empty: boolean;
}

export interface AuthUserResponse extends UserResponse {
    jwt: JWTResponse;
}

export interface JWTResponse {
    accessToken: string;
    tokenType: string;
    refreshToken: string;
    expiresIn: number;
}

export interface UserResponse {
    user: User;
    profile: UserProfile;
    userPlace: Place;
    role: Role;
    supplierProfile: SupplierProfile;
    supplierPlace: Place;
}

export interface PagedProductListResponse {
    productPage: PageCopy<any[]>;
    products: Product[];
    mediaSlots: { [index: string]: MediaSlot[] };
    productDetails: { [index: string]: ProductDetails };
    productStocks: { [index: string]: ProductStock[] };
    productSuppliers: { [index: string]: SupplierProfile };
}

export interface PagedStockVerificationResponse {
    productPage: PageCopy<any[]>;
    productStockResultSet: ProductStockResultSet[];
    mediaSlots: { [index: string]: MediaSlot[] };
    productDetails: { [index: string]: ProductDetails };
    productSuppliers: { [index: string]: SupplierProfile };
    supplierEmails: { [index: string]: string };
}

export interface ProductListResponse {
    products: Product[];
    mediaSlots: { [index: string]: MediaSlot[] };
    productDetails: { [index: string]: ProductDetails };
    productStocks: { [index: string]: ProductStock[] };
}

export interface ProductResponse {
    product: Product;
    mediaSlots: MediaSlot[];
    productDetails: ProductDetails;
    productStocks: ProductStock[];
    supplierProfile: SupplierProfile;
}

export interface Serializable {
}

export interface ProductStockResultSet {
    product: Product;
    productStock: ProductStock;
}
