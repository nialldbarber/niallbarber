import styled from 'styled-components';
import Link from 'next/link';

const ProjectCard = styled.div`
	width: 33.33333%;
	img {
		width: 100%;
		height: auto;
	}
	h3 {
		margin-bottom: 0;
		transition: .25s cubic-bezier(.895, .03, .685, .22);
	}
	&:hover {
		h3 {
			color: ${(props) => props.theme.pink};
		}
	}
`;

const Project = () => {
	return (
		<div className="grid">
			<ProjectCard>
				<Link href="https://array-methods.herokuapp.com/">
					<a>
						<h3>Array Methods</h3>
						<img src="../static/array-methods.png" />
					</a>
				</Link>
			</ProjectCard>
		</div>
	);
};

export default Project;
