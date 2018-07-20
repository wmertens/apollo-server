import { GraphQLScalarType } from 'graphql';
import { GraphQLUpload as UploadScalar } from 'apollo-upload-server';
export const GraphQLUpload = UploadScalar as GraphQLScalarType;
