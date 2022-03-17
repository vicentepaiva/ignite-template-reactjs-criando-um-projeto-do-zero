import Link from 'next/link';

import styles from './preview-button.module.scss';

interface PreviewButtonProps {
  preview: boolean;
}

export default function PreviewButton({
  preview,
}: PreviewButtonProps): JSX.Element {
  return (
    <>
      {preview && (
        <Link href="/api/exit-preview">
          <a className={styles.buttonPreview}>Sair do modo Preview</a>
        </Link>
      )}
    </>
  );
}