import crypto from 'crypto';
import { Plugin } from 'rollup';

interface DigestPluginOptions {
    /**
     * Hash algorithm used to generate digest.
     * You can use all algorithms, compatible with crypto.createHash.
     * Examples are 'sha256' (default), 'sha512', etc.
     */
    algorithm?: string;
}

/**
 * @param path Path to generate digest
 * @param options Additional options
 */
export default function digestPlugin(path: string, options?: DigestPluginOptions): Plugin {
    const hash = crypto.createHash(options?.algorithm ?? 'sha256');

    return {
        name: 'digest',
        generateBundle(_, output) {
            Object.keys(output)
                .sort()
                .forEach(fileName => hash.update(fileName));

            const digest = hash.digest('hex');

            this.emitFile({
                fileName: path,
                type: 'asset',
                source: digest,
            });
        },
    };
}
