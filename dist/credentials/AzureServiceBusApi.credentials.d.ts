import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class AzureServiceBusApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    constructor();
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
}
