<View style={{flex: 2, flexDirection: 'row'}}>
            {this.state.storyCard.links.map(link => 
              link.type == 'choice'? <Text key={link.destiny} style={styles.options} onPress={() => this.createCard(link.destiny)} > {link.desc} </Text>: null
            )}