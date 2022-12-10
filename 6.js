const input = `hrbbjllllspssblslvvrdrbbpbbmcccfppvbbwvbbmrmjrjrfrgfgbffgfqfqlltlwttscsncscchssrppffvwwvvpnnwwwpvwvhhnvhhbttvzzdlzdlzzwmmjhhznnjdnnnqddbtdbdbsdsmdsdrrdpdwpdppgcgqgcctftsfszslljbljbjwbwbnwnqqrnnztntmtrmmzwzdwzwgwwwjhjsjgjtjjhpjhhppqzqdqffrvrtvvsmmgwmgwgbbclltctptzpzhpzptzppcfpcfftflfzftztddzgzmmfsmsrmmsstttvbvmbvvsmsqmqlldjdtthwtwbwggrzzjrzrcctffsshqshhpthhlnhlhqhdqqrwrmmcttpfttzfzgzdgdzzwrrtsrrsnrnccrbbsssbpbjjvzzwlwtwjwsjwjggzqgzzrsszzjnzjzwjzzcrzczncnqqztzfzhfhvvtjvjdvjjmrjrppvzppczpczcggshghvhnhhsrsnsdszzdpzpzlpzzhwwmnwmwmcwwfnwfwjjcbcncllcsllqdqzzhqhmqmbbjvjjwwcjjpnpllzfzddtmtccqrcrtrwrpphpmpplslmltthnnvhhvrvbblhhrrdqqmbqqgtqggdgcdcvvsbsswvvpggbbtftlflglzlmlbbfhhrshswhshffhhdnnrfrvrmrnrprrmfmpmnpnfnggvvcncdcrczrzccpmmssrbbdjdtdrdwrrwhrrvrtvvszvvwvzzmhhjhhwlhlqlvlttzftztdtstftrfrdddmtmzzsqzqvvpdpdcpcncnrrtntznzrzgznztnznhhsqqnrqrhhlzhzthhfddrzdrrqmqggcmmllnjjvwwjccfjfqfcfzccwvcwvcvjcjtjtnnqsqmqrmrzrszrszzfwfggnmmcdmdjmmhwwgfwfnwnlwwcffsrffvnvbvnvwnwgnwnmmbzbmbpplmplpspzpmzpzdzgzrzrtrjrbbppwvwgwmggqwgghqqshhcwcqwcqcfcbbnsnrrtztzrtrvtvhthzhmmrqqrwqqsjqjcctgtwthhqmmnffmgmdgdlgljjhwjwggrqqfrqqjvqvhqqgsqsgsttmrrbprbppmjppslpsllvlfvlvrvhvtqmrjcdzwsbzfmgmwmwqwhztqrsdzhqjqvbjbntnbndflthljcczdmmhszfgsplrtlqnfzbrlqngwdqtfwcmrdjrsmdpmjmqwrbwfjzwnvqhfmlqtvvnlfzbfccwslqpbzzjccbvrzhghqwtvqgwrmsfzqnmnqqjsjtpcmngpqgllfsnpqtjjbqcdppnsmtwrslnrbqtwvnbctzvwfmgctscmzjbqqgqdwbpzmrdwgfcjzftzgmfcjhchbnmnqnrgtqngwrmncjvptqqdtjtgtpzzdrfsdgmwlwrjnqldbwrqjrhwcczlzvlhpgrnwzhbwjnpthggczfgtrjnzvnlfdfbwcnzfbwlwlmgnnjnpvhbhqgnzhqsnmvbcftsmrcgpvnnnmgnrvpbzlpwnbwpzmwpgqvbfgjwfrjqnvvgmqwwcfddqmdznmfhpjcfgptqdqwmplrglbwlmsqzjshrlhflcjvptgrcfhjfgqmlfzrtphpbvcqzwpcnwljjdlmqzhcctqshdngrgtlfsrfccdtlvmqcdgnpcvphdsrpzfzwclvsqcpzqlfvvqzggdhpfzdvhshglvfzfmcllrdfjfsjtngjgddcpqnlmrnplwtlvwdvzftltnsnspcdztgqhlhvvbnwvnmhscfnqbngpvprzfrjcmfpfzfftrlnwgllhnjndpjdrwcgqpcgcqngnbfzlvzvhnqdjthflmwvppmbdssddmgsbgrqnpjzrjpzdddqgsdlmwnhhpjbthclvqhgrsnrbqgtnsjhncnzbhrdgftvbptrqssvsqfpqnddhmgwcrfqndqjsqgffmhdvqhjrdlmrlcqctqccprwlbqgqrwmtfhwmfjfqzdqbsdsjbtsvfvgbsrvqwnqqqqthpsqgcfslsqtnjwtsrcdcctggdghrjwpbfccrtwgszwbrsjswmjmjbcqrsgbcfsdjzsbjnnssnddnnvwgftlrqvphnqcgjszscrlhhjnljlqcjqtqfwbmdmrgdlcqqwmbsmsdhpplvlfglqwspbfptlbzqjwhqmfvzvsvpjclcdzsbvntmhdqdvhghcmmflpjbglsghbswdshtsbdrgpsrsclrmfwwqbrgdjsqztgttqpwhnfhszlgbfpzhczsnwqflmshlgbrpmdzgpqwtsbssgfjbtrwbmztlwwfmsdgpgfgdjfdccwlfgztbcbqjvjtvslmddjplrswwcszspgplsrhrnwnmrrfbcgdmntcrlvnfqtwwcczsglrhtrfqnmhvgzjpmlplqvqhmnfgvzqcmzhqszgslvndqtqhvrbvbmclbcbjdswvcjrzgfdmdwnnlzlzqcffsrqdfmmpzfnmdsnqlpcrhzsdnsflblcjsfsgcnsspftjrlmdjsmfpqtmlgfvnlfnjscsgwzwvpjrvvclhsbqldlnmtglhbjfwlzmvrbvgtprfjbjhhnlqnbrswwlqtcgrjrltdrnfrjhrntllptlsbhqrwvdsfrlghtfcndznzjwcgmtdvffltgrdmljlqhdtmdvnfsfsrvdpmhlrrsttvqlwfptddwbpfrbclwwzmfpttmrmmqzjnbbnnfvzwmmcfshvrlbdbjzprftbqvdsghnnzwbjccpthdsvsdlgvphsgjdqjwsgmzqnqpqvgqjvwgjtzpmqqwnlwrwhqqjjclcbhjgpwhqdclwmqfmwbwmwwvcbhfznfhcfbprfcdqlbcttnvgnjwswcmpbrghtzgdbppbprffzjgvddzpwmdctrhnrfzdfhtmnfrsfdqvzcnrtncflhvldcndwqtvbggmwlzhchlcwtcbqcvlfhdwljgddwpvcfczvfqmphgtdsnsqwdpvvmwnwqjbrjwbdhhgtffphsdrvspsbgmfrmwmhnrgqdfppzgfpgmqjcsnglczgwhjthfhztzrlpgzjhcfrjpjvtjptptbvflftjtcfhmbwlhlbhvnjnbfmwjrgbvvhmdlncdgncgfjcnnpdljfcjsmsfscqpwsgcmlhhqmldsnjfrrqpghwncmgwgnjsdtvbhrbbnmpqjrrctqqnqzztmbqmdsgdvmmlwmbvprllzgntnmttrlzrttmjjlrwpwmtfznmwnsjmjhjdnsppfhcrjpzhjqzdtdbsjshfzzvrwvjbjbgtsfpgggbdztczwlhpmthfjdgsbrvlwmlrvgdrpjzccwmgpcnqqzmqdjqmwsrzwsmtmdjdhmjrwfwnzlmfnqtcgtslwtlnwhvmqntmglhntnsjlnmzfvfdztcfwmpchsrsdmqvqcwljzrmmssjvbmvvnmqlbsdwnrbmqctdtmfzlgfzpmjcnftgftvjpfbwwmzfdrrwjwcfwfcfmzbbnppgjrmbcvmvnjpdrzmvndvddtvshlnjjwgtsvnwtwnhcbfpnthpjlrhgrqccdgppjvdqjwqrfrrgnvhfwvjhnwhntnpmghphrtgqhwtbrqhqljfdjbgnlgmqqgfcqpqfhcpgspdbvlbfjvlrgmtjztwdzlrhqwwtcpdvsqgssjbjjgqlwbcctzzqvvmdzpfrmspmqhtzwgcfsslpnhpjfwqrrfbwbndrvhnnsjnlvlvqdsgwzjsrprhgtvsfbhbcpljdczbtdwzcnhzntrwcrjctmhtjfdlthznzmqblppzcqgpjhlzjrmcvpptfjjzltdhmvwphwlccscwrwfcqpqwwrzcmnltzdcfvtjrcvsqwtchrmdfzjmzjfhppjzbhglwqggzqqnspfmzrfwrqdqdrsdbsdhcgdqrrnjlwrqhfhpzjhrvjndqphndnnnbwhrjvqrrbvlhhbljjcwmfpvnhcszfshlsnczgtcfhjslbhzczdqdmdnvqdzhbmbpcnbntwgllfscrcwhfrgtfvftmwhbgfhjzjrbvvwc`;

const findSubsequent = ({ input, index, currentItems }) => {
	if (currentItems.length === 14) {
		if (currentItems.length === new Set(currentItems).size) return index;
		currentItems.shift();
	}
	currentItems.push(input[index]);
	return findSubsequent({ input, index: index + 1, currentItems });
};

console.log(findSubsequent({ input, index: 0, currentItems: []}));