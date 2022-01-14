import React, {useState} from "react";

const Accordion = ({ items }) => {

    const [activeIdx, setActiveIdx] = useState(null);

    const onTitleClicked = (idx) => {
        setActiveIdx(idx)
    }

	const renderedItems = items.map((item, idx) => {

        const activeClass = idx === activeIdx ? 'active' : '';

		return (
			<React.Fragment key={item.title}>
				<div className={`title ${activeClass}`} onClick={() => onTitleClicked(idx)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${activeClass}`}>{item.content}</div>
			</React.Fragment>
		);
	});

	return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
