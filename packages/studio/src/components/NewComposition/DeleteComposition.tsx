import type {RecastCodemod} from '@remotion/studio-shared';
import React, {useContext, useMemo} from 'react';
import {inlineCodeSnippet} from '../Menu/styles';
import {NewCompHeader} from '../ModalHeader';
import {
	ResolveCompositionBeforeModal,
	ResolvedCompositionContext,
} from '../RenderModal/ResolveCompositionBeforeModal';
import {CodemodFooter} from './CodemodFooter';
import {DismissableModal} from './DismissableModal';

const content: React.CSSProperties = {
	padding: 16,
	fontSize: 14,
	flex: 1,
	minWidth: 500,
};

const DeleteCompositionLoaded: React.FC<{
	compositionId: string;
}> = ({compositionId}) => {
	const context = useContext(ResolvedCompositionContext);
	if (!context) {
		throw new Error('Resolved composition context');
	}

	const {unresolved} = context;

	const codemod: RecastCodemod = useMemo(() => {
		return {
			type: 'delete-composition',
			idToDelete: compositionId,
		};
	}, [compositionId]);

	return (
		<>
			<NewCompHeader title={'Delete composition'} />
			<form>
				<div style={content}>
					Do you want to delete the{' '}
					<code style={inlineCodeSnippet}>
						{unresolved.durationInFrames === 1 ? `<Still>` : '<Composition>'}
					</code>{' '}
					with ID {'"'}
					{unresolved.id}
					{'"'}?
					<br />
					The associated <code style={inlineCodeSnippet}>component</code> will
					remain in your code.
				</div>
				<div style={{...content, borderTop: '1px solid black'}}>
					<CodemodFooter codemod={codemod} valid />
				</div>
			</form>
		</>
	);
};

export const DeleteComposition: React.FC<{
	compositionId: string;
}> = ({compositionId}) => {
	return (
		<DismissableModal>
			<ResolveCompositionBeforeModal compositionId={compositionId}>
				<DeleteCompositionLoaded compositionId={compositionId} />
			</ResolveCompositionBeforeModal>
		</DismissableModal>
	);
};
